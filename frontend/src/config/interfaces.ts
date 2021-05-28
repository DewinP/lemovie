export interface IMovie {
  id: number;
  title: string;
  runtime: number;
  vote_average: number;
  overview: string;
  revenue: number;
  release_date: string;
  genres: IGenre[];
  poster_path: string;
  tagline: string;
}

export enum GenreOption {
  action = 28,
  adventure = 12,
  animation = 16,
  comedy = 35,
  crime = 80,
  documentary = 99,
  drama = 18,
  family = 10751,
  fantasy = 14,
  history = 36,
  horror = 27,
  music = 10402,
  mystery = 9648,
  romance = 10749,
  science_fiction = 878,
  tv_movie = 10770,
  thriller = 53,
  war = 53,
  western = 37,
}

export interface IMovieSearchResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IVote {
  movieId: string;
  upvotes: number;
  downvotes: number;
}
