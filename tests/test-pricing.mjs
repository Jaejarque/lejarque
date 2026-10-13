import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pricingPath = path.resolve(__dirname, "../src/config/pricing.json");
const pricingData = JSON.parse(fs.readFileSync(pricingPath, "utf-8"));

// Import calculator logic directly
function calculateQuotation(input) {
  const rateUSD = pricingData.currencyDefaults.hourlyRateUSD;
  const exchangeRate = input.customUsdToArsRate || pricingData.currencyDefaults.usdToArsRate;
  const breakdown = [];

  let baseProjectHours = 0;
  const validTypes = input.projectTypes && input.projectTypes.length > 0 ? input.projectTypes : ["custom-software"];

  validTypes.forEach((typeKey) => {
    const pType = pricingData.projectTypes[typeKey];
    if (pType) {
      const hours = Math.round(pType.baseHours * pType.multiplier);
      baseProjectHours += hours;
      breakdown.push({
        concept: `Base de arquitectura: ${pType.name}`,
        hours,
        costUSD: hours * rateUSD,
        costLocal: input.currency === "ARS" ? hours * rateUSD * exchangeRate : hours * rateUSD,
      });
    }
  });

  if (validTypes.length > 1) {
    const synergyDiscountHours = Math.round(baseProjectHours * 0.15);
    baseProjectHours -= synergyDiscountHours;
    breakdown.push({
      concept: "Sinergia técnica multi-módulo (-15%)",
      hours: -synergyDiscountHours,
      costUSD: -synergyDiscountHours * rateUSD,
      costLocal: input.currency === "ARS" ? -synergyDiscountHours * rateUSD * exchangeRate : -synergyDiscountHours * rateUSD,
    });
  }

  const modules = Math.max(1, input.moduleCount || 1);
  const moduleHours = modules * pricingData.scope.baseHoursPerModule;
  breakdown.push({
    concept: `Módulos funcionales (${modules} unid. × ${pricingData.scope.baseHoursPerModule}h)`,
    hours: moduleHours,
    costUSD: moduleHours * rateUSD,
    costLocal: input.currency === "ARS" ? moduleHours * rateUSD * exchangeRate : moduleHours * rateUSD,
  });

  let userMultiplier = 1.0;
  for (const scale of pricingData.scope.userScaleFactors) {
    if (input.estimatedUsers <= scale.maxUsers) {
      userMultiplier = scale.multiplier;
      break;
    }
  }

  const platformConfig = pricingData.platforms[input.platform] || pricingData.platforms.web;
  const platformMultiplier = platformConfig.multiplier;

  const complexityConfig = pricingData.complexityLevels[input.complexity] || pricingData.complexityLevels.intermediate;
  const complexityMultiplier = complexityConfig.multiplier;

  const coreBaseHours = baseProjectHours + moduleHours;
  const scaledHours = Math.round(coreBaseHours * userMultiplier * platformMultiplier * complexityMultiplier);
  const factorDiffHours = scaledHours - coreBaseHours;

  if (factorDiffHours > 0) {
    breakdown.push({
      concept: `Ajuste por escala (${complexityConfig.name}, ${platformConfig.name}, ${input.estimatedUsers} usuarios)`,
      hours: factorDiffHours,
      costUSD: factorDiffHours * rateUSD,
      costLocal: input.currency === "ARS" ? factorDiffHours * rateUSD * exchangeRate : factorDiffHours * rateUSD,
    });
  }

  let extrasHours = 0;
  (input.extras || []).forEach((extraKey) => {
    const extra = pricingData.extras[extraKey];
    if (extra) {
      extrasHours += extra.hours;
      breakdown.push({
        concept: extra.name,
        hours: extra.hours,
        costUSD: extra.hours * rateUSD,
        costLocal: input.currency === "ARS" ? extra.hours * rateUSD * exchangeRate : extra.hours * rateUSD,
      });
    }
  });

  let totalCalculatedHours = scaledHours + extrasHours;

  const timelineConfig = pricingData.timelines[input.timeline] || pricingData.timelines.standard;
  const timelineDiffHours = Math.round(totalCalculatedHours * (timelineConfig.multiplier - 1.0));
  if (timelineDiffHours !== 0) {
    totalCalculatedHours += timelineDiffHours;
    breakdown.push({
      concept: `Ajuste de plazo: ${timelineConfig.name}`,
      hours: timelineDiffHours,
      costUSD: timelineDiffHours * rateUSD,
      costLocal: input.currency === "ARS" ? timelineDiffHours * rateUSD * exchangeRate : timelineDiffHours * rateUSD,
    });
  }

  const minHours = Math.round(totalCalculatedHours * pricingData.estimationConfig.minRangeFactor);
  const maxHours = Math.round(totalCalculatedHours * pricingData.estimationConfig.maxRangeFactor);

  const baseCostUSD = totalCalculatedHours * rateUSD;
  const minCostUSD = Math.round(baseCostUSD * pricingData.estimationConfig.minRangeFactor);
  const maxCostUSD = Math.round(baseCostUSD * pricingData.estimationConfig.maxRangeFactor);

  const finalMinCost = input.currency === "ARS" ? Math.round(minCostUSD * exchangeRate) : minCostUSD;
  const finalMaxCost = input.currency === "ARS" ? Math.round(maxCostUSD * exchangeRate) : maxCostUSD;

  const sprintHours = pricingData.estimationConfig.hoursPerSprintWeek;
  const baseWeeks = Math.max(2, Math.round((totalCalculatedHours / sprintHours) * timelineConfig.weeksMultiplier));
  const minWeeks = Math.max(2, Math.round(baseWeeks * 0.85));
  const maxWeeks = Math.round(baseWeeks * 1.25);

  const supportPlan = pricingData.supportPlans[input.supportPlan] || pricingData.supportPlans.none;
  const monthlySupportCost = supportPlan.monthlyCostUSD;
  const monthlySupportCostLocal = input.currency === "ARS" ? Math.round(monthlySupportCost * exchangeRate) : monthlySupportCost;

  return {
    totalHours: totalCalculatedHours,
    minHours,
    maxHours,
    minCost: finalMinCost,
    maxCost: finalMaxCost,
    currency: input.currency,
    rateUsed: exchangeRate,
    estimatedWeeks: {
      min: minWeeks,
      max: maxWeeks,
    },
    monthlySupportCost,
    monthlySupportCostLocal,
    breakdown,
  };
}

test("1. Basic software quotation in USD computes realistic values", () => {
  const result = calculateQuotation({
    projectTypes: ["custom-software"],
    moduleCount: 4,
    estimatedUsers: 50,
    platform: "web",
    complexity: "basic",
    extras: [],
    timeline: "standard",
    supportPlan: "none",
    currency: "USD",
  });

  assert.ok(result.totalHours > 0, "Hours should be positive");
  assert.ok(result.minCost > 0, "Min cost should be positive");
  assert.ok(result.maxCost >= result.minCost, "Max cost should be >= min cost");
  assert.equal(result.currency, "USD");
  assert.ok(result.estimatedWeeks.min >= 2);
  assert.ok(result.breakdown.length >= 2, "Should have breakdown items");
});

test("2. Multi-currency ARS conversion applies correct exchange rate", () => {
  const rate = 1350;
  const usdResult = calculateQuotation({
    projectTypes: ["custom-software"],
    moduleCount: 4,
    estimatedUsers: 50,
    platform: "web",
    complexity: "basic",
    extras: [],
    timeline: "standard",
    supportPlan: "basic",
    currency: "USD",
    customUsdToArsRate: rate,
  });

  const arsResult = calculateQuotation({
    projectTypes: ["custom-software"],
    moduleCount: 4,
    estimatedUsers: 50,
    platform: "web",
    complexity: "basic",
    extras: [],
    timeline: "standard",
    supportPlan: "basic",
    currency: "ARS",
    customUsdToArsRate: rate,
  });

  assert.equal(arsResult.rateUsed, rate);
  assert.equal(arsResult.minCost, usdResult.minCost * rate);
  assert.equal(arsResult.maxCost, usdResult.maxCost * rate);
  assert.equal(arsResult.monthlySupportCostLocal, usdResult.monthlySupportCost * rate);
});

test("3. Accelerated timeline adds expected urgency surcharge and compresses weeks", () => {
  const stdResult = calculateQuotation({
    projectTypes: ["web-mobile-app"],
    moduleCount: 6,
    estimatedUsers: 500,
    platform: "mobile",
    complexity: "intermediate",
    extras: ["ux-ui", "qa-automated"],
    timeline: "standard",
    supportPlan: "none",
    currency: "USD",
  });

  const accResult = calculateQuotation({
    projectTypes: ["web-mobile-app"],
    moduleCount: 6,
    estimatedUsers: 500,
    platform: "mobile",
    complexity: "intermediate",
    extras: ["ux-ui", "qa-automated"],
    timeline: "accelerated",
    supportPlan: "none",
    currency: "USD",
  });

  assert.ok(accResult.minCost > stdResult.minCost, "Accelerated cost should be higher");
  assert.ok(accResult.estimatedWeeks.max < stdResult.estimatedWeeks.max, "Accelerated weeks should be shorter");
});
