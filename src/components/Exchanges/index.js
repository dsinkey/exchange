import React from 'react';
import { useExchanges } from '../../state/ExchangesContextProvider';
import Exchanges from './Exchanges';

const Feed = () => {
  const { status, exchanges } = useExchanges();
  console.log('exchanges', exchanges);

  switch (status) {
    case 'LOADING':
      return 'LOADING';
    case 'COMPLETE':
      return <Exchanges exchanges={exchanges} />;
    default:
      return 'Loading...';
  }
};

export default Feed;
