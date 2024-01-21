import { finalFilteredLeagues as leagues } from "../countries.ts";

const getCountryLeagues = (country: string) => {
  const foundedCountry = leagues.find(
    (league) => league.country.name === country
  );
  return foundedCountry?.items;
};

export { getCountryLeagues };
