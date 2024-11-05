import "reflect-metadata";

import { config } from "dotenv";
import { app } from "./app";
import { AppDataSource } from "./db/datasource";
config();

const PORT = process.env.PORT || 8000;

const main = async () => {
  await AppDataSource.initialize();
  app.listen(PORT, () => console.log("Server started on port ", PORT));
};

main();
