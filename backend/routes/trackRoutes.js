import express from 'express';
import multer from 'multer';
import { uploadMusic } from '../controllers/trackController.js';

const router = express.Router();

// Multer config to handle file upload in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  '/upload',
  upload.fields([
    { name: 'musicFile', maxCount: 1 },
    { name: 'thumbnailFile', maxCount: 1 }
  ]),
  uploadMusic
);

export default router;




// backend/routes/trackRoutes

// import express from "express";
// import { createMusic } from "../controllers/trackController.js";

// const router = express.Router();

// router.post("/",createMusic);

// export default router;
