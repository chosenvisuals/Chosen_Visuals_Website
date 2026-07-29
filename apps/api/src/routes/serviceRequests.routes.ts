import { Router } from "express";
import { createServiceRequest, listServiceRequests, quoteServiceRequest } from "../controllers/serviceRequests.controller";
import { requireAuth } from "../middleware/auth";
import { requireRole } from "../middleware/role";

export const serviceRequestsRouter = Router();

serviceRequestsRouter.post("/", createServiceRequest);
serviceRequestsRouter.get("/", requireAuth, requireRole("staff", "admin"), listServiceRequests);
serviceRequestsRouter.patch("/:id/quote", requireAuth, requireRole("staff", "admin"), quoteServiceRequest);
