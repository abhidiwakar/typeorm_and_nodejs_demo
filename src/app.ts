import express from "express";
import cors from "cors";

export const app = express();

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(router);

router.get("/", (_, res) => {
  res.json({
    message: "Hello world!",
  });
});
