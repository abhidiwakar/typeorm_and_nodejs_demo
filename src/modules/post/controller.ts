import { Request, Response } from "express";
import { findPosts } from "./service";

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
