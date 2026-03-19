const { generateIllustration } = require("../services/calculationService");
const Policy = require("../models/Policy");

exports.calculate = async (req, res) => {
const data = {
  premium: Number(req.body.premium),
  term: Number(req.body.term),
  sumAssured: Number(req.body.sumAssured),
  riders: req.body.riders || [], // ✅ NEW
};
  const result = generateIllustration(data);

  res.json(result);
};

exports.getPolicies = async (req, res) => {
  try {
    const policies = await Policy.findAll();

    const formatted = policies.map((p) => {
      const obj = p.toJSON();

      return {
        ...obj,
        riders: obj.riders ? JSON.parse(obj.riders) : [],
      };
    });

    res.json(formatted);
  } catch (err) {
    console.error("GET POLICY ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getPolicyById = async (req, res) => {
  try {
    const policy = await Policy.findByPk(req.params.id);

    if (!policy) {
      return res.status(404).json({ message: "Policy not found" });
    }

    const obj = policy.toJSON();

    res.json({
      ...obj,
      riders: obj.riders ? JSON.parse(obj.riders) : [], // ✅ FIX HERE
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createPolicy = async (req, res) => {
  try{
    const { premium, term, sumAssured, policyType, premiumOption, riders } = req.body;

    const newPolicy = await Policy.create({
      premium,
      term,
      sumAssured,
      policyType,
      premiumOption,
      riders: JSON.stringify(riders || []), // ✅ NEW
    });

    res.json(newPolicy);
  }catch(err){
    console.error("CREATE POLICY ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};