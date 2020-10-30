import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Heading1 } from '../components/typography';
import fetchFromApi from '../utils/fetch';
import ShopEntry from '../components/shopEntry';
import { WrappedRows } from '../utils/flex';
import NotFound from './notFound';

const getShopEntries = (shopCategory) => (shopCategory
  && shopCategory[0] ? shopCategory[0].shop_entries : []);

const ShopEntryPage = ({ slug }) => {
  const [entries, setEntries] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetchFromApi('shop-categories', { slug }).then((data) => {
      setCategory(data[0]);
      setEntries(getShopEntries(data));
    });
  }, []);

  if (!category) {
    return <NotFound />;
  }

  return (
    <>
      <Heading1 center>{category.name}</Heading1>
      <WrappedRows>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {entries.map((entry) => <ShopEntry key={entry.id} {...entry} />)}
      </WrappedRows>
    </>
  );
};

ShopEntryPage.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ShopEntryPage;
