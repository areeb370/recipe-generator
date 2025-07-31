const mongoose = require("mongoose");

exports.connectDB = () => {
  if (!process.env.MONGO_URI) {
    console.warn(
      "⚠️  MongoDB URI not found. Please set MONGO_URI in your .env file"
    );
    console.log("📝 Using in-memory database for development");

    return;
  }

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err.message);
      console.log("📝 Continuing without database connection...");
      console.log("📝 Recipes will be stored in memory for this session");
    });
};
