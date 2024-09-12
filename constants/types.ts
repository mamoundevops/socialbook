// Define PostItem type here as well if it's not imported
export type User = {
  id: string;
  image: string;
  name: string;
};

export type PostItem = {
  id: string;
  createdAt: string;
  User: User;
  description: string;
  image?: string;
  numberOfLikes: number;
  numberOfShares: number;
};

// Define props for Post component
export type PostProps = {
  postItem: PostItem;
};
