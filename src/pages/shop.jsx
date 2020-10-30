import React, { useEffect, useState } from 'react';
import { WrappedRows } from '../utils/flex';
import ShopCategory from '../components/shopCategory';
import fetchFromApi from '../utils/fetch';

const Shop = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    fetchFromApi('shop-categories').then((data) => setEntries(data));
  }, []);

  return (
    <WrappedRows>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {entries.map((entry) => <ShopCategory key={entry.id} {...entry} />)}
    </WrappedRows>
  );
};

export default Shop;
