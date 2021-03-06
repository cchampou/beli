import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import { Items } from '../utils/flex';
import { getPreferredSize, getUrlFromFormat } from '../utils/media';
import { Heading3, Paragraph } from './typography';
import { scaleOnHover } from '../utils/styles';

const Wrapper = styled(Items)`
  max-width: 20rem;
  min-width: 20rem;
  flex-direction: column;
  box-shadow: 0 5px 10px #DDDDDD;
  margin: 1rem;
  padding: 0;
  cursor: pointer;
  ${scaleOnHover};
`;

const SubWrapper = styled('div')`
  padding: 0 1rem;
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
        <SubWrapper>
          <Heading3>{name}</Heading3>
          <Paragraph>{description}</Paragraph>
        </SubWrapper>
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
