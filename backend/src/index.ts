import { createConnection } from "typeorm";
import DatabaseConfig from "./config/DatabaseConfig";
import express from "express";
import apiRoutes from "./api/routes/index";

const main = async () => {
  const PORT = 4000;
  await createConnection(DatabaseConfig);
  const app = express();
  app.set("trust proxy", 1);
  app.use(express.urlencoded({ extended: false })).use(express.json());
  app.use("/api", apiRoutes);
  app.listen(4000, () => {
    console.log(`server running in port: http://localhost:${PORT}`);
  });
};

main().then((e) => {
  console.log(e);
});
