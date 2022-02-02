import React from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import { PostCardProps } from '../../shared/props';
import { Post } from '../../shared/models';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../components/layout';

export const getStaticPaths: GetStaticPaths = async () => {
  const response: Response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const posts: Post[] = await response.json();

  const paths = posts.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { id } = context.params as ParsedUrlQuery & { id?: string };
  const response: Response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post: Post = await response.json();

  return {
    props: { post },
  };
};

const PostPage: NextPage<PostCardProps> = ({ post }) => {
  return (
    <Layout title={`#${post.id} post`}>
      <h2>Post page</h2>
      <h3>Id: {post.id}</h3>
      <h4>UserId: {post.userId}</h4>
      <strong>Title: {post.title}</strong>
      <p>Body: {post.body}</p>
    </Layout>
  );
};

export default PostPage;
