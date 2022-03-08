import React from 'react';
import Head from 'next/head';
import { LayoutProps } from '../shared/props';
import styled from 'styled-components';
import Nav from './nav';

const Container = styled.main`
  padding: 1em;
  color: gray;
`

const Layout: React.FC<LayoutProps> = ({
  children,
  description,
  title,
  keywords,
}) => {
  return (
    <>
      <Head>
        <meta name="description" content={description || ''} />
        <meta name="keywords" content={'next.js, ssr'.concat(keywords || '')} />
        <title>{title}</title>
      </Head>
      <Container>
        <Nav />
        {children}
      </Container>
    </>
  );
};

export default Layout;
