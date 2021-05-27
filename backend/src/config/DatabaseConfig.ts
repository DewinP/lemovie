import { ConnectionOptions } from "typeorm";
export default {
  type: "postgres",
  database: "movies-yearone",
  username: "postgres",
  password: "postgres",
  logging: true,
  synchronize: true,
  entities: [],
} as ConnectionOptions;
