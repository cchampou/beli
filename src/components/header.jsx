import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

import { breakpoints } from '../../config/theme.json';

import Logo from './logo';

const Header = styled('div')`
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const Padder = styled('div')`
  height: 10rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: white;
  ${({ scrolled }) => scrolled && 'box-shadow: 0 0 7px silver'};
  transition: box-shadow 0.25s ease-in-out;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const Items = styled.li`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: auto 2rem;
`;

export default () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollHandler = useCallback(() => {
    setScrolled(window.scrollY !== 0);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <Header>
      <Padder />
      <Container scrolled={scrolled}>
        <List>
          <Items><Link to="/">Accueil</Link></Items>
          <Items><Link to="about">Qui suis-je</Link></Items>
          <Items><Link to="shop">Boutique</Link></Items>
        </List>
        <Link to="/">
          <Logo height="150" width="213" />
        </Link>
        <List>
          <Items><Link to="blog">Blog</Link></Items>
          <Items><Link to="contact">Contact</Link></Items>
          <Items><Link to="youtube">Youtube</Link></Items>
        </List>
      </Container>
    </Header>
  );
};
