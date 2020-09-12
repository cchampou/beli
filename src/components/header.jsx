import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import Logo from './logo';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const Items = styled.li`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 2rem;
`;

export default () => (
  <Container>
    <List>
      <Items><Link to="">Accueil</Link></Items>
      <Items><Link to="about">Qui suis-je</Link></Items>
      <Items><Link to="about">Boutique</Link></Items>
    </List>
    <Logo height="10rem" />
    <List>
      <Items>Blog</Items>
      <Items>Contact</Items>
      <Items>Youtube</Items>
    </List>
  </Container>
);
