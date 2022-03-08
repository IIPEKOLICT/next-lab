import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import Layout from '../../components/layout';
import { readdir } from 'fs/promises';
import { SharedFilesPageProps } from '../../shared/props';
import { StyledLink } from '../../components/styled-components';
import { PUBLIC_PATH } from '../../shared/constants';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { getPublicDirs } from '../../shared/helpers';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getPublicDirs()).map((dir: string) => ({
    params: { id: dir },
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
  const fileNames: string[] = await readdir(join(PUBLIC_PATH, id || ''));

  return {
    props: { dir: id, fileNames },
  };
};

const SharedFiles: NextPage<SharedFilesPageProps> = ({ dir, fileNames }) => {
  return (
    <Layout title={dir}>
      <h1>{dir} directory</h1>
      {fileNames.map((fileName: string) => (
        <StyledLink key={fileName}>
          <a href={join('/', dir, fileName)}>{fileName}</a>
        </StyledLink>
      ))}
    </Layout>
  );
};

export default SharedFiles;
