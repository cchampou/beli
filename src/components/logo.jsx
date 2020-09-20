import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import LogoFile from '../assets/logo.jpg';

const Image = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const Logo = ({ width, height }) => <Image src={LogoFile} alt="Logo Belinda" height={height} width={width} />;

Logo.defaultProps = {
  width: 'auto',
  height: 'auto',
};

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Logo;
