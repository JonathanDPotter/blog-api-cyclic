import config from "./config";
import createServer from "./utils/createServer";

const server = createServer();
const { baseURL, port } = config.server;

server.listen(port, () => {
  console.log(`Server listening at: ${baseURL}`);
});
