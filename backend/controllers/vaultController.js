// backend/controllers/vaultController.js
import {nftData} from '../data/mockVaults.js';

export const getToken = (req, res) => {
  const { listenerId } = req.params;
  res.json(nftData[listenerId] || []);
};

