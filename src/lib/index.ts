import { useQuery } from "@tanstack/react-query";
import { User } from "./../../types.d";

const API_URL = "https://jsonplaceholder.typicode.com";
const USER_QUERY_KEY = "users";

async function getUsers(): Promise<User[]> {
  const response = await fetch(`${API_URL}/${USER_QUERY_KEY}`);
  const users = await response.json();
  return users;
}

export const useUsersQuery = () => useQuery<User[]>([USER_QUERY_KEY], getUsers);
