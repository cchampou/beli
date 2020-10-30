import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { breakpoints } from '../../config/theme.json';
import Logo from './logo';

const Header = styled('div')`
  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const Pad = styled('div')`
  height: 6rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  width: calc(100vw - 2rem);
  z-index: 10;
  top: 0;
  background-color: white;
  ${({ scrolled }) => scrolled && 'box-shadow: 0 0 7px silver'};
  transition: box-shadow 0.25s ease-in-out;
`;

const List = styled('div')`
  list-style: none;
  display: ${({ opened }) => (opened ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100px;
  background-color: white;
  width: 100vw;
  left: 0;
  box-shadow: 0 5px 5px silver;
`;

const Items = styled(Link)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
`;

export default () => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);

  const scrollHandler = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  const onBarsClick = useCallback(() => setOpened(!opened), [opened]);

  return (
    <Header>
      <Pad />
      <Container scrolled={scrolled}>
        <Link to="/">
          <Logo height="100" width="142" />
        </Link>
        <FontAwesomeIcon icon={opened ? faTimes : faBars} size="2x" onClick={onBarsClick} />
        <List opened={opened} onClick={onBarsClick}>
          <Items to="/">Accueil</Items>
          <Items to="about">Qui suis-je</Items>
          <Items to="shop">Boutique</Items>
          <Items to="blog">Blog</Items>
          <Items to="contact">Contact</Items>
          <Items to="youtube">Youtube</Items>
        </List>
      </Container>
    </Header>
  );
};
