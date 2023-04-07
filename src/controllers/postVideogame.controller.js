import { videogamesModel } from "../models/videogames.model.js";

export async function postVideogame(req, res, next) {
  const data = req.body;
  const response = await videogamesModel.postVideogame(data);
  console.log(response);
  res.status(201).json(response);
}
