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
import { useShared } from '../../hooks/useShared';

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params as ParsedUrlQuery & { id?: string };
  const fileNames: string[] = await (
    await fetch(join(API_URL, id || ''))
  ).json();
  const links: string[] = fileNames.map((fileName: string) =>
    join(API_URL, id || '', fileName)
  );

  return { props: { dir: id, fileNames, links } };
};

const SharedFiles: NextPage<SharedFilesPageProps> = ({
  dir,
  fileNames,
  links,
}) => {
  const { openFile } = useShared(links);

  return (
    <Layout title={dir}>
      <h1>{dir} directory</h1>
      {fileNames.map((fileName: string, index: number) => (
        <StyledLink key={fileName}>
          <a onClick={openFile(index)}>{fileName}</a>
        </StyledLink>
      ))}
    </Layout>
  );
};

export default SharedFiles;
