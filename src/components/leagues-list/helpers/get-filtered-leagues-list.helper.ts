import { finalFilteredLeagues } from "../countries.ts";
import eplLogo from "../../../assets/images/icons/epl-logo.png";

// finalFilteredLeagues[0].country.name = "International";
finalFilteredLeagues[0].country.flag = eplLogo;

type League = {
  id: number;
  name: string;
  type: string;
  logo: string;
};

const allLeagues: League[] = [];

finalFilteredLeagues.forEach((item) =>
  item.items.forEach(({ league }) => allLeagues.push(league))
);

const getFilteredLeaguesList = (query: string) => {
  if (!query) {
    return finalFilteredLeagues;
  }

  const filteredCountries = finalFilteredLeagues.filter((league) => {
    return league.country.name.toLowerCase().includes(query);
  });

  const filteredLeagues = allLeagues.filter((league) =>
    league.name.toLowerCase().includes(query)
  );

  return [...filteredCountries, ...filteredLeagues];
};

export { getFilteredLeaguesList };
