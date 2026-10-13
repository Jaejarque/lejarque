import pricingData from "../config/pricing.json";

export interface QuotationInput {
  projectTypes: string[];
  moduleCount: number;
  estimatedUsers: number;
  platform: string;
  complexity: string;
  extras: string[];
  timeline: string;
  supportPlan: string;
  currency: "USD" | "ARS";
  customUsdToArsRate?: number;
}

export interface BreakdownItem {
  concept: string;
  hours: number;
  costUSD: number;
  costLocal: number;
}

export interface QuotationResult {
  totalHours: number;
  minHours: number;
  maxHours: number;
  minCost: number;
  maxCost: number;
  currency: "USD" | "ARS";
  rateUsed: number;
  estimatedWeeks: {
    min: number;
    max: number;
  };
  monthlySupportCost: number;
  monthlySupportCostLocal: number;
  breakdown: BreakdownItem[];
  disclaimer: string;
}

export function calculateQuotation(input: QuotationInput): QuotationResult {
  const rateUSD = pricingData.currencyDefaults.hourlyRateUSD;
  const exchangeRate = input.customUsdToArsRate || pricingData.currencyDefaults.usdToArsRate;
  const breakdown: BreakdownItem[] = [];

  // 1. Horas base por tipos de proyecto
  let baseProjectHours = 0;
  const validTypes = input.projectTypes.length > 0 ? input.projectTypes : ["custom-software"];

  validTypes.forEach((typeKey) => {
    const pType = (pricingData.projectTypes as Record<string, any>)[typeKey];
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

  // Si hay más de un tipo de proyecto, se añade un descuento por sinergia arquitectónica del 15%
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

  // 2. Horas por módulos de alcance
  const modules = Math.max(1, input.moduleCount || 1);
  const moduleHours = modules * pricingData.scope.baseHoursPerModule;
  breakdown.push({
    concept: `Módulos funcionales (${modules} unid. × ${pricingData.scope.baseHoursPerModule}h)`,
    hours: moduleHours,
    costUSD: moduleHours * rateUSD,
    costLocal: input.currency === "ARS" ? moduleHours * rateUSD * exchangeRate : moduleHours * rateUSD,
  });

  // 3. Multiplicador de escala de usuarios
  let userMultiplier = 1.0;
  for (const scale of pricingData.scope.userScaleFactors) {
    if (input.estimatedUsers <= scale.maxUsers) {
      userMultiplier = scale.multiplier;
      break;
    }
  }

  // 4. Multiplicador de plataforma
  const platformConfig = (pricingData.platforms as Record<string, any>)[input.platform] || pricingData.platforms.web;
  const platformMultiplier = platformConfig.multiplier;

  // 5. Multiplicador de complejidad
  const complexityConfig = (pricingData.complexityLevels as Record<string, any>)[input.complexity] || pricingData.complexityLevels.intermediate;
  const complexityMultiplier = complexityConfig.multiplier;

  // Subtotal de ingeniería de núcleo afectado por factores
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

  // 6. Servicios y extras seleccionados
  let extrasHours = 0;
  (input.extras || []).forEach((extraKey) => {
    const extra = (pricingData.extras as Record<string, any>)[extraKey];
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

  // Total antes de plazo
  let totalCalculatedHours = scaledHours + extrasHours;

  // 7. Plazo (timeline)
  const timelineConfig = (pricingData.timelines as Record<string, any>)[input.timeline] || pricingData.timelines.standard;
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

  // Rango de inversión y horas
  const minHours = Math.round(totalCalculatedHours * pricingData.estimationConfig.minRangeFactor);
  const maxHours = Math.round(totalCalculatedHours * pricingData.estimationConfig.maxRangeFactor);

  const baseCostUSD = totalCalculatedHours * rateUSD;
  const minCostUSD = Math.round(baseCostUSD * pricingData.estimationConfig.minRangeFactor);
  const maxCostUSD = Math.round(baseCostUSD * pricingData.estimationConfig.maxRangeFactor);

  const finalMinCost = input.currency === "ARS" ? Math.round(minCostUSD * exchangeRate) : minCostUSD;
  const finalMaxCost = input.currency === "ARS" ? Math.round(maxCostUSD * exchangeRate) : maxCostUSD;

  // Estimación de semanas
  const sprintHours = pricingData.estimationConfig.hoursPerSprintWeek;
  const baseWeeks = Math.max(2, Math.round((totalCalculatedHours / sprintHours) * timelineConfig.weeksMultiplier));
  const minWeeks = Math.max(2, Math.round(baseWeeks * 0.85));
  const maxWeeks = Math.round(baseWeeks * 1.25);

  // Soporte mensual posterior
  const supportPlan = (pricingData.supportPlans as Record<string, any>)[input.supportPlan] || pricingData.supportPlans.none;
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
    disclaimer: pricingData.estimationConfig.disclaimer,
  };
}
