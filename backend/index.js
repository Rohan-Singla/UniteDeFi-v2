// backend/index.js
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import userRoutes from './routes/user.js';
import songsRoutes from './routes/songsRoutes.js';
import purchaseRoutes from './routes/purchaseRoutes.js';
import listenerRoutes from "./routes/listenerRoutes.js";
import creatorRoutes from "./routes/creatorRoutes.js";
import trackRoutes from "./routes/trackRoutes.js";
import vaultRoutes from "./routes/vaultRoutes.js";
// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/songs', songsRoutes);
app.use('/api/buy', purchaseRoutes);
app.use("/api/listener", listenerRoutes);
app.use("/api/creator", creatorRoutes);
app.use("/api/music", trackRoutes);
app.use("/api/vaults", vaultRoutes);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
