import { ConnectionOptions } from "typeorm";
import { Movie } from "../api/models/Movie";
export default {
  type: "postgres",
  database: "movies-yearone",
  username: "postgres",
  password: "postgres",
  logging: true,
  synchronize: true,
  entities: [Movie],
} as ConnectionOptions;
