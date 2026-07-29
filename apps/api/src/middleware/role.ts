import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "./auth";

// Use after requireAuth. e.g. requireRole("admin", "staff") guards CMS routes;
// requireRole("instructor") guards course-management routes.
export function requireRole(...allowedRoles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ success: false, error: "Insufficient permissions" });
    }
    next();
  };
}
