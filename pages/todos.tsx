import React from 'react';
import { NextPage } from 'next';
import { TodosProps } from '../shared/props';
import { Todo } from '../shared/models';
import Layout from '../components/layout';

const Todos: NextPage<TodosProps> = ({ todos }) => {
  return (
    <Layout title="Todos page">
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await response.json();

  return {
    props: { todos },
  };
}

export default Todos;
