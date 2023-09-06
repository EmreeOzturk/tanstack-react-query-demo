export type User = {
  id: number;
  userName: string;
  name: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  user: User;
};
