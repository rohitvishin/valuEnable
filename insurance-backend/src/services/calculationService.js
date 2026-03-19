exports.generateIllustration = ({
  premium,
  term,
  sumAssured,
  riders = [],
}) => {
  const rate = 0.06;

  premium = Number(premium);
  term = Number(term);
  sumAssured = Number(sumAssured);

  // normalize riders
  if (typeof riders === "string") {
    try {
      riders = JSON.parse(riders);
    } catch {
      riders = [];
    }
  }

  if (!Array.isArray(riders)) riders = [];

  const riderCost = riders.reduce((sum, r) => sum + Number(r.cost || 0), 0);

  const yearlyPremium = premium + riderCost;

  let result = [];
  let totalPremium = 0;

  for (let year = 1; year <= term; year++) {
    totalPremium += yearlyPremium;

    // ✅ correct compounding
    let fundValue = 0;

    for (let i = 1; i <= year; i++) {
      fundValue += yearlyPremium * Math.pow(1 + rate, year - i + 1);
    }

    result.push({
      year,
      totalPremium,
      fundValue: Math.round(fundValue),
      lifeCover: sumAssured,
    });
  }

  return result;
};