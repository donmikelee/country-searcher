export interface Country {
    name: {
      common: string;
      official: string;
    };
    population: number;
    region: string;
    subregion?: string;
    capital: string[];
    tld: string[];
    flags: {
      png: string;
      svg: string;
      alt?: string;
    };
    currencies: {
      [code: string]: {
        name: string;
        symbol: string;
      };
    };
    languages: {
      [code: string]: string;
    };
    borders?: string[];
}  