import express from "express";
import cors from "cors";
import { postRouter } from "./modules/post/routes";

export const app = express();

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(router);

app.use("/post", postRouter);

router.get("/", (_, res) => {
  res.json({
    message: "Hello world!",
  });
});
