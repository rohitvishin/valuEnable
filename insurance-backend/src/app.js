const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const policyRoutes = require("./routes/policyRoutes");

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (
        origin.startsWith("http://localhost:3000") ||
        origin.startsWith("http://127.0.0.1:3000")
      ) {
        return callback(null, true);
      }

      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/policy", policyRoutes);

module.exports = app;