import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { TodoPageProps } from '../../shared/props';
import { Todo } from '../../shared/models';
import Layout from '../../components/layout';
import { ParsedUrlQuery } from 'querystring';
import styled from 'styled-components';

const UserIQ = styled.p<Pick<TodoPageProps, 'randomNumber'>>`
  color: ${({ randomNumber }) => randomNumber > 50 ? 'green' : 'red'};
  opacity: ${({ randomNumber }) => randomNumber * Math.random()};
  font-size: 2em;
`

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = (context.params as ParsedUrlQuery & { id?: string });
  const response: Response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const todo: Todo = await response.json();
  const randomNumber = Math.round(Math.random() * todo.userId * todo.id)

  return { props: { todo, randomNumber } };
};

const TodoPage: NextPage<TodoPageProps> = ({ todo, randomNumber }) => {
  return (
    <Layout title={`#${todo.id} todo`}>
      <h2>Todo page</h2>
      <p>Id: {todo.id}</p>
      <p>UserId: {todo.userId}</p>
      <p>Title: {todo.title}</p>
      <p>Completed: {todo.completed ? 'true' : 'false'}</p>
      <hr/>
      <UserIQ randomNumber={randomNumber}>User IQ: {randomNumber}</UserIQ>
    </Layout>
  );
};

export default TodoPage;
