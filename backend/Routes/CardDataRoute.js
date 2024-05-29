import {CardControllerGet, CardDataController} from "../controllers/cardDataControllers.js";
import express from 'express'

const router = express.Router();


router.post('/carddata', CardDataController)
router.get('/carddata', CardControllerGet);

export default router;