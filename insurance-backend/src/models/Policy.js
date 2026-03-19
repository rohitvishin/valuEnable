const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Policy = sequelize.define("Policy", {
  premium: DataTypes.FLOAT,
  term: DataTypes.INTEGER,
  sumAssured: DataTypes.FLOAT,

  policyType: DataTypes.STRING,      // ✅ NEW
  premiumOption: DataTypes.STRING,   // optional
  riders: DataTypes.JSON,            // ✅ NEW
});

module.exports = Policy;