import { Todo } from './models';

export type LayoutProps = {
  description?: string;
  keywords?: string;
  title: string;
}

export type TodosProps = {
  todos: Todo[];
}
