import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import Card, { CardSubWrapper } from './card';
import { getPreferredSize, getUrlFromFormat } from '../utils/media';
import { Heading3, Paragraph } from './typography';
import { scaleOnHover } from '../utils/styles';

const Wrapper = styled(Card)`
  max-width: 20rem;
  min-width: 20rem;
  flex-direction: column;
  cursor: pointer;
  ${scaleOnHover};
`;

const Cover = styled('img')`
  display: flex;
  max-width: 100%;
`;

const ShopCategory = ({
  name, cover, description, slug,
}) => {
  const imageUrl = useMemo(() => getUrlFromFormat(getPreferredSize(cover, 'medium')), [cover]);
  return (
    <Wrapper>
      <Link to={slug}>
        <Cover src={imageUrl} alt={name} />
        <CardSubWrapper>
          <Heading3>{name}</Heading3>
          <Paragraph>{description}</Paragraph>
        </CardSubWrapper>
      </Link>
    </Wrapper>
  );
};

ShopCategory.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    formats: PropTypes.object.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ShopCategory;
