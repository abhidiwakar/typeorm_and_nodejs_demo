import { config } from "dotenv";
import { app } from "./app";
config();

const PORT = process.env.PORT || 8000;

const main = async () => {
  app.listen(PORT, () => console.log("Server started on port ", PORT));
};

main();
