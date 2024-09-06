import { Router } from "express";
import { getMoors } from "../controllers/paramos_controller";

export const paramosRouter = Router();

paramosRouter.get('/paramos', getMoors);
