import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Movie } from "../models/Movie";

export class MovieController {
  public static AddMovie = async (req: Request, res: Response) => {
    let movie = await getRepository(Movie).save({
      movieId: req.params.movieId,
    });
    res.json(movie);
  };
  public static upvoteMovie = async (req: Request, res: Response) => {
    let movie = await getRepository(Movie).findOne({
      where: { movieId: req.body.movieId },
    });
    if (movie) {
      movie.upvotes++;
      await getRepository(Movie).save(movie);
      res.json(movie);
    } else {
      res.sendStatus(500);
    }
  };
  public static getMovie = async (req: Request, res: Response) => {
    let movie = await getRepository(Movie).findOne({
      where: { movieId: req.params.movieId },
    });
    if (movie) {
      res.json(movie);
    } else {
      res.json(null);
      //res.sendStatus(200)
    }
  };
  public static downvoteMovie = async (req: Request, res: Response) => {
    let movie = await getRepository(Movie).findOne({
      where: { movieId: req.body.movieId },
    });
    if (movie) {
      movie.downvotes++;
      await getRepository(Movie).save(movie);
      res.json(movie);
    } else {
      res.sendStatus(401);
    }
  };
}
