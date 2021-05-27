import { Router } from "express";
import { MovieController } from "../controller/movie.controller";

const router = Router();
router.use("/addMovie", MovieController.AddMovie);
router.use("/likeMovie", MovieController.likeMovie);
router.use("/dislikeMovie", MovieController.dislikeMovie);

export default router;
