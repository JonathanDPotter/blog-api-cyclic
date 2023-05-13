import { Request, Response, Router } from "express";
import path from "path";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.status(200).sendFile(path.join(__dirname, "../static/index.html"));
});

export default router;
