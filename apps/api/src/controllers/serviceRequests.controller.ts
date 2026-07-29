import { Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middleware/auth";

const createSchema = z.object({
  serviceType: z.string().min(2),
  description: z.string().min(2),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
});

// Public endpoint — visitors can request a quote without an account.
export async function createServiceRequest(req: AuthenticatedRequest, res: Response) {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ success: false, error: parsed.error.message });

  const request = await prisma.serviceRequest.create({
    data: {
      serviceType: parsed.data.serviceType,
      description: `${parsed.data.description}\n\nContact: ${parsed.data.fullName}, ${parsed.data.email}, ${parsed.data.phone}`,
      clientId: req.user?.id,
    },
  });

  res.status(201).json({ success: true, data: { id: request.id } });
}

// Staff/Admin only — enforced by requireRole in the route definition.
export async function listServiceRequests(_req: AuthenticatedRequest, res: Response) {
  const requests = await prisma.serviceRequest.findMany({ orderBy: { createdAt: "desc" } });
  res.json({ success: true, data: requests });
}

const quoteSchema = z.object({
  quotedAmount: z.number().int().positive(),
});

export async function quoteServiceRequest(req: AuthenticatedRequest, res: Response) {
  const parsed = quoteSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ success: false, error: parsed.error.message });

  const updated = await prisma.serviceRequest.update({
    where: { id: req.params.id },
    data: { quotedAmount: parsed.data.quotedAmount, status: "quoted" },
  });
  res.json({ success: true, data: updated });
}
