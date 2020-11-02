import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import styled from '@emotion/styled';

import { colors } from '../../config/theme.json';

import Card, { CardSubWrapper } from '../components/card';
import { Heading3 } from '../components/typography';
import { HTMLToString, limit } from '../utils/text';
import { Rows } from '../utils/flex';
import { toReadableShortDate } from '../utils/dateTime';
import { scaleOnHover } from '../utils/styles';

const CustomRows = styled(Rows)`
  flex-wrap: wrap;
  width: 40%;
  margin: auto;
`;

const Image = styled('img')`
  width: 100%;
`;

const CustomCard = styled(Card)`
  min-width: 20rem;
  ${scaleOnHover};
`;

const Title = styled(Heading3)`
  margin-bottom: 0;
`;

const Details = styled('p')`
  margin: 0.25rem;
  color: ${colors.secondary};
`;

const Synopsis = styled('p')`
  margin-top: 0;
`;

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(null);
  useEffect(() => {
    fetch('https://api.beli.cchampou.me/posts?_sort=date:DESC')
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
      });
  }, []);

  if (!blogPosts) { return null; }

  return (
    <CustomRows>
      {blogPosts.map((blogPost) => (
        <CustomCard key={blogPost.id}>
          <Link to={blogPost.slug}>
            {blogPost.legacy_image && <Image src={blogPost.legacy_image} alt={blogPost.name} />}
            <CardSubWrapper>
              <Title>{blogPost.title}</Title>
              <Details>
                {toReadableShortDate(new Date(blogPost.date))}
                &nbsp;-&nbsp;
                {blogPost.post_categories.map((category) => category.name)}
              </Details>
              <Synopsis>{limit(HTMLToString(blogPost.content), 280)}</Synopsis>
            </CardSubWrapper>
          </Link>
        </CustomCard>
      ))}
    </CustomRows>
  );
};

Blog.propTypes = {

};

export default Blog;
