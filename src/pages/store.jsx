import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Rows } from '../utils/flex';
import ShopCategory from '../components/shopCategory';

const WrappedRows = styled(Rows)`
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
`;

const Store = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    fetch('https://api.beli.cchampou.me/shop-categories').then((res) => res.json()).then((data) => setEntries(data));
  }, []);

  return (
    <WrappedRows>
      {entries.map((entry) => <ShopCategory key={entry.id} {...entry} />)}
    </WrappedRows>
  );
};

export default Store;
