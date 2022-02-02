type Entity = {
  id: number;
  userId: number;
  title: string;
}

export type Todo = Entity & {
  completed: boolean;
}

export type Post = Entity & {
  body: string;
}
