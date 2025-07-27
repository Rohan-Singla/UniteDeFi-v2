
import express from "express";
import { getToken } from "../controllers/vaultController.js";

const router = express.Router();

router.get("/:userId/nfts", getToken);

export default router;
