import { Request, Response } from "express";
import { addPost, findPosts } from "./service";

export const createPost = async (req: Request, res: Response) => {
  try {
    const result = await addPost(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const result = await findPosts();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};
