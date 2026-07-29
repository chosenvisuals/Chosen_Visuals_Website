import { Router } from "express";
import { listEvents, registerForEvent } from "../controllers/events.controller";

export const eventsRouter = Router();

eventsRouter.get("/", listEvents);
export const eventRegistrationsRouter = Router();
eventRegistrationsRouter.post("/", registerForEvent);
