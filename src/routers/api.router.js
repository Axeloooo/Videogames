import { Router } from "express";
import { postVideogame } from "../controllers/postVideogame.controller.js";

export const apiRouter = Router();

apiRouter.post("/videogames", postVideogame);
