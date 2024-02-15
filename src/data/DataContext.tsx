// DataContext.tsx
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
// axios wykonuje parsowanie do fomratu JSON autamtycznie 
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
    // słowo kluczowe async informuje, że dana funkcja jest asynchroniczna
    const fetchData = async () => {
      try {
        // słowo kluczowe await jest używane, aby upewnić się że najpierw skończy się pobieranie danych z api, a potem zostaną podjęte kolejne linijki kodu
        const response = await axios.get('https://restcountries.com/v3.1/all');
        if (response.status === 200) {
          setCountries(response.data);
        } else {
          setError(`Nieudane żądanie. Kod statusu: ${response.status}`);
        }
      } catch (error) {
        setError(`Nieudane pobranie danych`);
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