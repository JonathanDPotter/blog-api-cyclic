import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import indexRoutes from "../routes/index.routes";
import path from "path";

const createServer = () => {
  const server = express();

  server.use(express.static(path.join(__dirname, "../static")));
  server.use(express.json());
  server.use(cors({ origin: "*" }));
  server.use(morgan("dev"));
  server.use(helmet());
  server.use(indexRoutes);
  return server;
};

export default createServer;
