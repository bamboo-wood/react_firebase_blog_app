export type Post = {
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  postText: string;
  author: {
    uid: string;
    username: string;
  };
  title: string;
  id: string;
};
