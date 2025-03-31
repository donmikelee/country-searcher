import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

interface DataProviderProps {
  children: ReactNode;
}

interface DataContextProps {
    countries: [];
    filtredRegion: string;
    typedCountryName: string;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [filtredRegion, setFiltredRegion] = useState<string | null>(null);
  const [typedCountryName, setTypedCountryName] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        if (response.status === 200) {
          setCountries(response.data);
        } else {
          setError(`Failed request. Status code: ${response.status}`);
        }
      } catch (error) {
        setError(`Failed to fetch data`);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ countries, filtredRegion, setFiltredRegion, typedCountryName, setTypedCountryName }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export { DataProvider, useData };