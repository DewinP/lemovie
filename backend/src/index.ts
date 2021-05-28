import { createConnection } from "typeorm";
import DatabaseConfig from "./config/DatabaseConfig";
import express from "express";
import apiRoutes from "./api/routes/index";
import cors from "cors";
import morgan from "morgan";

const main = async () => {
  const PORT = 4000;
  await createConnection(DatabaseConfig);
  const app = express();
  app
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use(morgan("dev"))
    .use(
      cors({
        origin: "http://localhost:3000",
        credentials: true,
      })
    );
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`server running in port: http://localhost:${PORT}`);
  });
};

main().then((e) => {
  console.log(e);
});
