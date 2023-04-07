import express from "express";
import { engine } from "express-handlebars";
import { PORT } from "../config/server.config.js";
import { apiRouter } from "../routers/api.router.js";
import { viewsRouter } from "../routers/views.router.js";
import { connectDB } from "../database/videogames.db.js";

const app = express();

app.engine("handlebars", engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.use(express.static("./public"));
app.use(express.json());

app.use("/", viewsRouter);
app.use("/api", apiRouter);

const _ = await connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
