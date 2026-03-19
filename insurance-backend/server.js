require("dotenv").config();
const app = require("./src/app");
const sequelize = require("./src/config/db");
sequelize.sync().then(() => {
  console.log("Database connected");

  app.listen(8010, () => {
    console.log("Server running on port 8010");
  });
});