import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { PostPageProps } from '../shared/props';
import { Post } from '../shared/models';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import { StyledUl } from '../components/styled-components';

export const getStaticProps: GetStaticProps = async () => {
  const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();

  return {
    props: { posts },
  };
}

const Todos: NextPage<PostPageProps> = ({ posts }) => {
  return (
    <Layout title="Posts">
      <h3>Post list</h3>
      <p>SSG technology used for render post pages</p>
      <StyledUl>
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </StyledUl>
    </Layout>
  );
};

export default Todos;
