import { Post, Todo } from './models';

export type LayoutProps = {
  description?: string;
  keywords?: string;
  title: string;
};

export type TodosProps = {
  todos: Todo[];
};

export type TodoCardProps = {
  todo: Todo;
};

export type TodoPageProps = TodoCardProps & {
  randomNumber: number;
};

export type PostCardProps = {
  post: Post;
};

export type PostPageProps = {
  posts: Post[];
};

export type SharedFilesPageProps = {
  dir: string;
  fileNames: string[];
  links?: string[];
};
