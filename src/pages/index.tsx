import type { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '../components/layout';
import Image from 'next/image';

const Styled = styled.div`
  width: 100%;
  height: 150vh;
  text-align: center;

  h1 {
    color: violet;
  }
`;

const Divider = styled.div`
  height: 100vh;
`;

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Styled>
        <h1>Home page</h1>
        <Divider />
        <Image
          src="https://www.pcclean.io/wp-content/uploads/2020/4/iuEnim.jpg"
          width={500}
          height={300}
          alt="image"
          blurDataURL="https://images.ctfassets.net/hrltx12pl8hq/58CIvG6Whv49bsmRbqaEZ6/e42a73d8ddef6f9c126fa49d384be678/6.jpg?fit=fill&w=480&h=270"
          placeholder="blur"
        />
      </Styled>
    </Layout>
  );
};

export default Home;
