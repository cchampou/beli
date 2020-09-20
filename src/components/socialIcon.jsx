import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const WithMarginIcon = styled(FontAwesomeIcon)`
  margin: 10px;
  color: ${({ color }) => color};
`;

const SocialIcon = ({ icon, link, color }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <WithMarginIcon icon={icon} size="1x" color={color} />
  </a>
);

SocialIcon.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SocialIcon;
