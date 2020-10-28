import React from 'react';
import styled from '@emotion/styled';
import { color } from '../utils/styles';

const Wrapper = styled('div')`
  position: absolute;
  background-color: ${color('light')};
  color: ${color('primary')};
  padding: 1rem;
  text-align: center;
  bottom: 0;
  width: calc(100% - 2rem);
`;

const Footer = () => (
  <Wrapper>
    Belinda SANS TABOUS - Tous droits réservés I Copyright © 2020
    I Lire les Conditions Générales de Vente
  </Wrapper>
);

export default Footer;
