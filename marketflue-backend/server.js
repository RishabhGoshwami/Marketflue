require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config');

// ✅ Routes import
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes'); // 🔹 Added this line

// Initialize app
const app = express();

// Connect MongoDB
connectDB(process.env.MONGO_URI);

// Middleware setup
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true,
  })
);
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

// Logger in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ✅ Serve static files for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ API routes
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes); // 🔹 Added route connection

// ✅ Default route
app.get('/', (req, res) => {
  res.send('🟢 MarketFlue Backend running successfully');
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
