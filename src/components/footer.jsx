import React from 'react';
import styled from '@emotion/styled';
import { color } from '../utils/styles';

const Wrapper = styled.div`
  background-color: ${color('light')};
  color: ${color('primary')};
  margin: 0;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => (
  <Wrapper>
    Belinda SANS TABOUS - Tous droits réservés I Copyright © 2020
    I Lire les Conditions Générales de Vente
  </Wrapper>
);

export default Footer;
