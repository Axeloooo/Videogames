import { Router } from "express";
import { videogamesModel } from "../models/videogames.model.js";

export const viewsRouter = Router();

viewsRouter.get("/", (req, res, next) => {
  res.redirect("/videogames");
});

viewsRouter.get("/videogames", async (req, res, next) => {
  const videogames = await videogamesModel.getVideogames();
  res.render("videogames", {
    title: "Videogames",
    haveVideogames: videogames.length > 0,
    videogames,
  });
});
