import mongoose from "mongoose";

const videogameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

class Videogames {
  #db;
  constructor() {
    this.#db = mongoose.model("videogames", videogameSchema);
  }

  async getVideogames() {
    const res = await this.#db.find().lean();
    return res;
  }

  async postVideogame(videogame) {
    const res = await this.#db.create(videogame);
    return res;
  }

  async getVideogameById() {
    const res = await this.#db.findById(id).lean();
    return res;
  }
}

export const videogamesModel = new Videogames();
