import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { prisma } from "../lib/prisma";

export interface AuthenticatedRequest extends Request {
  user?: { id: string; role: string };
}

// Every protected route runs this first. The frontend may hide/show UI based on role,
// but this is the actual security boundary (docs/ARCHITECTURE.md, Section 5.6).
export async function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, error: "Missing or invalid Authorization header" });
  }

  const token = header.replace("Bearer ", "");
  try {
    const payload = jwt.verify(token, env.supabaseJwtSecret) as { sub: string };
    
    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
    });

    if (!user) {
      return res.status(401).json({ success: false, error: "User profile not found" });
    }

    req.user = { id: user.id, role: user.role };
    next();
  } catch (error) {
    return res.status(401).json({ success: false, error: "Invalid or expired token" });
  }
}
