import React from 'react';
import Logo from '../logo';

export const Showcase = () => (
  <>
    <Large />
    <Medium />
    <Small />
  </>
);

export const Small = () => (
  <Logo width="10rem" />
);

export const Medium = () => (
  <Logo width="15rem" />
);

export const Large = () => (
  <Logo width="20rem" />
);

export default {
  title: 'Logo',
};
