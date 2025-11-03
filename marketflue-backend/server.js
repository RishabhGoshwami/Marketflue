require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config");

// ✅ Routes import
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");

// Initialize app
const app = express();

// ✅ Connect MongoDB
connectDB(process.env.MONGO_URI);

// ✅ Middleware setup
app.use(helmet());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

// ✅ CORS Configuration (Fixed)
const allowedOrigins = [
  "http://marketflue.com",
  "https://marketflue.com",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = "CORS policy does not allow this origin: " + origin;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

// ✅ Logger (only in development mode)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ✅ Serve static files for uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ API Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("🟢 MarketFlue Backend running successfully");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
