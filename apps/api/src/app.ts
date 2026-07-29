import express from "express";
import cors from "cors";
import { apiRouter } from "./routes";
import { env } from "./config/env";

export function createApp() {
  const app = express();

  app.use(cors({ origin: env.corsOrigin }));
  app.use(express.json());

  app.get("/health", (_req, res) => res.json({ success: true, data: { status: "ok" } }));

  app.use("/api", apiRouter);

  // Basic error handler — keeps API responses consistent even when a controller throws.
  app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal server error" });
  });

  return app;
}
