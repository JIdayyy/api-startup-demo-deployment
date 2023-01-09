import express from "express";
import dotenv from "dotenv";
import api from "./api";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(
  morgan(
    ":date[iso] :remote-addr :method :url :status :res[content-length] - :response-time ms"
  )
);

app.use("/api/v1", api);

export default app;
