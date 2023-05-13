import dotenv from "dotenv";

dotenv.config();

const { HOST, PORT, NODE_ENV } = process.env;

const server = {
  host: HOST,
  port: PORT,
  baseURL:
    NODE_ENV === "development"
      ? `http://${HOST}:${PORT}`
      : `https://${HOST}:${PORT}`,
};

export default { server };