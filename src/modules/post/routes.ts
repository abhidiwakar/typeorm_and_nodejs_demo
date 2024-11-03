import { Router } from "express";
import { createPost, getPosts } from "./controller";

export const postRouter = Router();

postRouter.get("/", getPosts);
postRouter.post("/", createPost);
