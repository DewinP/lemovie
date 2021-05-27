import { Request, Response } from "express";
import { title } from "process";
import { getRepository } from "typeorm";
import { Movie } from "../models/Movie";

export class MovieController {
  public static AddMovie = async (req: Request, res: Response) => {
    let movie = await getRepository(Movie).save({
      title: req.body.title,
      like: req.body.like ? 1 : 0,
      dislike: req.body.like ? 0 : 1,
    });
    res.status(201).json(movie);
  };
  public static likeMovie = async (req: Request, res: Response) => {
    let movie = await getRepository(Movie).save({
      title: title,
      like: req.body.likes,
    });
    res.json(movie);
  };
  public static dislikeMovie = async (req: Request, res: Response) => {
    let movie = await getRepository(Movie).save({
      title: title,
      like: req.body.dislikes,
    });
    res.json(movie);
  };
}
