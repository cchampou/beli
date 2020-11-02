import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import NotFound from './notFound';

const Wrapper = styled('div')`
  width: 40%;
  margin: auto;
`;

const Image = styled('img')`
  max-width: 30rem;
  margin: 4rem auto;
  display: block;
`;

const BlogPost = ({ slug }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.beli.cchampou.me/posts?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data[0]);
        setLoading(false);
      });
  }, []);

  if (!item && !loading) { return <NotFound />; }

  if (!item) { return null; }

  return (
    <Wrapper>
      {item.legacy_image && <Image src={item.legacy_image} alt={item.title} />}
      <h1>{item.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: item.content }} />
    </Wrapper>
  );
};

BlogPost.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default BlogPost;
