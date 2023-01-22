import express from "express"
import { saludar } from "../controllers/controller.js";

const router = express.Router();

router.get("/", saludar)

export default router;