require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/mongo");
const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipe");

const app = express();
app.use(cors(), express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
