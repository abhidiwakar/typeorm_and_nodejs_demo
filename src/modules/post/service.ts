import { DeepPartial } from "typeorm";
import { AppDataSource } from "../../db/datasource";
import { Post } from "../../db/entity/post";

const postRepository = AppDataSource.getRepository(Post);

export const addPost = async (data: DeepPartial<Post>) => {
  return postRepository.save(data);
};

export const findPosts = async () => {
  return postRepository.find();
};
