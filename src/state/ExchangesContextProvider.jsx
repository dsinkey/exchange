import React, { useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';
const ExchangeContext = createContext();
export const useExchanges = () => useContext(ExchangeContext);

const ExchangeProvider = ({ children }) => {
  const [exchanges, setExchanges] = useState([]);
  const [status, setStatus] = useState('LOADING');

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/exchanges')
      .then((res) => {
        setExchanges(res.data.slice(0, 10));
        setStatus('COMPLETE');
      })
      .catch((err) => setStatus('ERROR'));
  }, []);

  const value = { exchanges, status };

  return (
    <ExchangeContext.Provider value={value}>
      {children}
    </ExchangeContext.Provider>
  );
};

export default ExchangeProvider;
