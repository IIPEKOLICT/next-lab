import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

const centeredStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledNav = styled.nav`
  width: 100%;
  
  ul {
    width: 100%;
    display: flex;
    gap: 2em;
    list-style: none;
    padding: 0;
    
    @media ${props => props.theme.media.phone} {
      flex-direction: column;
      align-items: center;
    }
  }
  
  li {
    width: 100px;
    color: brown;
    padding: 1em;
    position: relative;
    ${centeredStyles};
    transition: .2s ease-out;
    
    &:hover {
      background: rgba(0,0,0,.3);
    }
    
    a {
      width: 100%;
      height: 100%;
      position: absolute;
      ${centeredStyles}
    }
  }
`

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/todos">Todos</Link>
        </li>
        <li>
          <Link href="/create">Create todo</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
