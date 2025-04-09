import React, { createContext, useContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { Country } from "@/types/Country";

interface DataProviderProps {
    children: ReactNode;
}

interface RecentCountry {
    name: string;
    flag: string;
}

interface DataContextProps {
    countries: Country[];
    filtredRegion: string | null;
    typedCountryName: string | null;
    sortBy: string | null;
    recentlyViewed: RecentCountry[];
    setFiltredRegion: (region: string | null) => void;
    setTypedCountryName: (name: string | null) => void;
    setSortBy: (sortBy: string | null) => void;
    addToRecentlyViewed: (country: RecentCountry) => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [filtredRegion, setFiltredRegion] = useState<string | null>(null);
    const [typedCountryName, setTypedCountryName] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string | null>(null);
    const [recentlyViewed, setRecentlyViewed] = useState<RecentCountry[]>(() => {
        return JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    });

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

    useEffect(() => {
        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
    }, [recentlyViewed]);

    const addToRecentlyViewed = (country: RecentCountry) => {
        setRecentlyViewed((prev) => {
            const updated = [country, ...prev.filter((c) => c.name !== country.name)].slice(0, 5);
            return updated;
        });
    };

    return (
        <DataContext.Provider
            value={{
                countries,
                filtredRegion,
                typedCountryName,
                sortBy,
                recentlyViewed,
                setFiltredRegion,
                setTypedCountryName,
                setSortBy,
                addToRecentlyViewed,
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
