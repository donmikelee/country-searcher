import React, { createContext, useContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface DataProviderProps {
    children: ReactNode;
}

interface Country {
    name: { common: string };
    region: string;
    population: number;
    flags: { png: string; alt: string };
    capital: string[];
}

interface DataContextProps {
    countries: Country[];
    filtredRegion: string | null;
    typedCountryName: string | null;
    sortBy: string | null;
    setFiltredRegion: (region: string | null) => void;
    setTypedCountryName: (name: string | null) => void;
    setSortBy: (sortBy: string | null) => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [filtredRegion, setFiltredRegion] = useState<string | null>(null);
    const [typedCountryName, setTypedCountryName] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                if (response.status === 200) {
                    setCountries(response.data);
                } else {
                    console.error(`Failed request. Status code: ${response.status}`);
                }
            } catch (error) {
                console.error("Failed to fetch data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider
            value={{
                countries,
                filtredRegion,
                typedCountryName,
                sortBy,
                setFiltredRegion,
                setTypedCountryName,
                setSortBy,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};

export { DataProvider, useData };
