import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import { StyledLink } from '../components/styled-components';

export default function Error() {
  return (
    <Layout title="Error page" description=" error, invalid page">
      <h1>Error: page not found</h1>
      <StyledLink>
        <Link href="/">Go to home page</Link>
      </StyledLink>
    </Layout>
  );
};
