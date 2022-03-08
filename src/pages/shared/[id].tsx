import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import Layout from '../../components/layout';
import { SharedFilesPageProps } from '../../shared/props';
import { StyledLink } from '../../components/styled-components';
import { API_URL } from '../../shared/constants';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params as ParsedUrlQuery & { id?: string };
  const fileNames: string[] = await (
    await fetch(join(API_URL, id || ''))
  ).json();

  return { props: { dir: id, fileNames } };
};

const SharedFiles: NextPage<SharedFilesPageProps> = ({ dir, fileNames }) => {
  return (
    <Layout title={dir}>
      <h1>{dir} directory</h1>
      {fileNames.map((fileName: string) => (
        <StyledLink key={fileName}>
          <a href={`${API_URL}/${dir}/${fileName}`}>{fileName}</a>
        </StyledLink>
      ))}
    </Layout>
  );
};

export default SharedFiles;
