import type { GetStaticProps, NextPage } from 'next';
import Layout from '../components/layout';
import { StyledLink } from '../components/styled-components';
import { getPublicDirs } from '../shared/helpers';
import { SharedFilesPageProps } from '../shared/props';

export const getStaticProps: GetStaticProps = async () => ({
  props: { dir: '', fileNames: await getPublicDirs() },
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
