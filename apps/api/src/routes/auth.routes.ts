import { Router } from "express";
import { getMe } from "../controllers/auth.controller";
import { requireAuth } from "../middleware/auth";

export const authRouter = Router();

authRouter.get("/me", requireAuth, getMe);
