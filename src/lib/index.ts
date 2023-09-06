import { User } from "./../../types.d";

export const API_URL = "https://jsonplaceholder.typicode.com";
export const USER_QUERY_KEY = "users";
export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${API_URL}/${USER_QUERY_KEY}`);
  const users = await response.json();
  return users;
}
