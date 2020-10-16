import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import orphanagesController from "./controllers/OrphanagesController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/", async (req, res) => {
  return res.json({ status: "online" });
});

routes.post("/orphanages", upload.array("images"), orphanagesController.create);
routes.get("/orphanages", orphanagesController.index);
routes.get("/orphanages/:id", orphanagesController.show);

export default routes;
