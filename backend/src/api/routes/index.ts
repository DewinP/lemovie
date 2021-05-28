import { Router } from "express";
import { MovieController } from "../controller/movie.controller";

const router = Router();
router.post("/add/:movieId", MovieController.AddMovie);
router.get("/movie/:movieId", MovieController.getMovie);
router.patch("/upvote", MovieController.upvoteMovie);
router.patch("/downvote", MovieController.downvoteMovie);

export default router;
