import dotenv from "dotenv";

dotenv.config();

const { HOST, PORT, NODE_ENV } = process.env;

const server = {
  host: HOST,
  port: PORT,
  env: NODE_ENV,
  baseURL:
    NODE_ENV === "development"
      ? `http://${HOST}:${PORT}`
      : `https://${HOST}:${PORT}`,
};

export default { server };