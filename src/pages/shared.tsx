import type { GetStaticProps, NextPage } from 'next';
import Layout from '../components/layout';
import { StyledLink } from '../components/styled-components';
import { API_URL } from '../shared/constants';
import { SharedFilesPageProps } from '../shared/props';

export const getStaticProps: GetStaticProps = async () => ({
  props: { dir: '', fileNames: await (await fetch(API_URL)).json() },
});

const Shared: NextPage<SharedFilesPageProps> = ({ fileNames }) => {
  return (
    <Layout title="Shared">
      <h1>Shared page</h1>
      {fileNames.map((item: string) => (
        <StyledLink key={item}>
          <a href={'/shared/' + item}>{item}</a>
        </StyledLink>
      ))}
    </Layout>
  );
};

export default Shared;
