import React from 'react';
import styled from '@emotion/styled';

import { breakpoints } from '../../config/theme.json';

import { color } from '../utils/styles';

const Wrapper = styled('div')`
  position: absolute;
  background-color: ${color('light')};
  color: ${color('primary')};
  padding: 1rem;
  text-align: center;
  bottom: 0;
  width: calc(100% - 2rem);
  @media (max-width: ${breakpoints.mobile}) {
    line-height: 1.1rem;
    font-size: 0.9rem;
    padding: 0.9rem;
  }
`;

const Pad = styled('div')`
  width: 100%;
  height: 4rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    height: 6rem;
  }
`;
const Footer = () => (
  <>
    <Pad />
    <Wrapper>
      Belinda SANS TABOUS - Tous droits réservés I Copyright © 2020
      I Lire les Conditions Générales de Vente
    </Wrapper>
  </>
);

export default Footer;
