import type { NextPage } from 'next'
import styled from 'styled-components';
import Layout from '../components/layout';

const Styled = styled.div`
  h1 {
    color: violet;
  }
`

const Home: NextPage = () => {
  return (
    <Layout title="Home page">
      <Styled>
        <h1>Home page</h1>
      </Styled>
    </Layout>
  )
}

export default Home
