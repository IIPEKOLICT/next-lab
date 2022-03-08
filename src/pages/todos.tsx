import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { TodosProps } from '../shared/props';
import { Todo } from '../shared/models';
import Layout from '../components/layout';
import TodoCard from '../components/todo-card';
import { StyledUl } from '../components/styled-components';

export const getStaticProps: GetStaticProps = async () => {
  const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await response.json();

  return {
    props: { todos },
  };
}

const Todos: NextPage<TodosProps> = ({ todos }) => {
  return (
    <Layout title="Todos">
      <h3>Todo list</h3>
      <p>SSR technology used for render todo pages</p>
      <StyledUl>
        {todos.map((todo: Todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </StyledUl>
    </Layout>
  );
};

export default Todos;
