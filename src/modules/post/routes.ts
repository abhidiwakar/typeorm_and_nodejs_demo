import { Router } from "express";
import { getPosts } from "./controller";

const router = Router();

router.get("/post", getPosts);
