import styled from 'styled-components';

export const StyledUl = styled.ul`
  padding: 0;
  list-style: none;
  max-width: 600px;
  margin: 0 auto;
`

export const Card = styled.div`
  padding: 0 .2em;
  margin: .5em;
  border: 2px solid transparent;
  transition: .2s linear;
  
  &:hover {
    background-color: rgba(0,0,0,.2);
    border-color: cornflowerblue;
  }
`

export const StyledLink = styled.div`
  color: cornflowerblue;
  transition: .5s ease;
  
  &:hover {
    opacity: .8;
  }
`
