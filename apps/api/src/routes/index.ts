import { Router } from "express";
import { authRouter } from "./auth.routes";
import { coursesRouter } from "./courses.routes";
import { eventsRouter, eventRegistrationsRouter } from "./events.routes";
import { serviceRequestsRouter } from "./serviceRequests.routes";

export const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/courses", coursesRouter);
apiRouter.use("/events", eventsRouter);
apiRouter.use("/event-registrations", eventRegistrationsRouter);
apiRouter.use("/service-requests", serviceRequestsRouter);
