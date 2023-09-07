import { useQuery } from "@tanstack/react-query";
import { Post, User } from "./../../types.d";

const API_URL = "https://jsonplaceholder.typicode.com";
const USER_QUERY_KEY = "users";
const POST_QUERY_KEY = "posts";

async function getUsers(): Promise<User[]> {
  const response = await fetch(`${API_URL}/${USER_QUERY_KEY}`);
  const users = await response.json();
  return users;
}

async function getUserPosts(userId: number): Promise<Post[]> {
  const response = await fetch(
    `${API_URL}/${USER_QUERY_KEY}/${userId}/${POST_QUERY_KEY}`
  );
  const posts = await response.json();
  return posts;
}

export const useUsersQuery = () => useQuery<User[]>([USER_QUERY_KEY], getUsers);

export const useUserPostsQuery = (userId: number) => {
  return useQuery<Post[]>([USER_QUERY_KEY, userId, POST_QUERY_KEY], () =>
    getUserPosts(userId)
  );
};
