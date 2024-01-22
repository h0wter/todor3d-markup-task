import kevinDeBruyneImg from "../../assets/images/players/kevin-de-bruyne.png";
import alissonBeckerImg from "../../assets/images/players/alisson-becker.png";
import virgilVanDijkImg from "../../assets/images/players/virgil-van-dijk.png";
import manchesterCityLogo from "../../assets/images/teams/manchester-city.png";
import liverpoolLogo from "../../assets/images/teams/liverpool.png";
import { type Team } from "../../types";

const firstTeam: Team = {
  name: "Manchester City",
  coach: {
    name: "Josep Guardiola",
    imgUrl: kevinDeBruyneImg,
  },
  imgUrl: manchesterCityLogo,
  formation: "4-3-3/1",
  players: [
    {
      name: "Alisson Becker",
      imgUrl: alissonBeckerImg,
    },
    {
      name: "Kevin De Bruyne",
      imgUrl: kevinDeBruyneImg,
    },
    {
      name: "Kevin De Bruyne",
      imgUrl: kevinDeBruyneImg,
    },
    {
      name: "Kevin De Bruyne",
      imgUrl: kevinDeBruyneImg,
    },
    {
      name: "Kevin De Bruyne",
      imgUrl: kevinDeBruyneImg,
    },
    {
      name: "Kevin De Bruyne",
      imgUrl: kevinDeBruyneImg,
    },
    {
      name: "Kevin De Bruyne",
      imgUrl: kevinDeBruyneImg,
    },
    {
      name: "Kevin De Bruyne",
      imgUrl: kevinDeBruyneImg,
    },
    {
      name: "Kevin De Bruyne",
      imgUrl: kevinDeBruyneImg,
    },
    {
      name: "Kevin De Bruyne",
      imgUrl: kevinDeBruyneImg,
    },
    {
      name: "Kevin De Bruyne",
      imgUrl: kevinDeBruyneImg,
    },
  ],
};

const secondTeam: Team = {
  name: "Liverpool",
  coach: {
    name: "Jurgen Klopp",
    imgUrl: virgilVanDijkImg,
  },
  imgUrl: liverpoolLogo,
  formation: "4-3-3/2",
  players: [
    {
      name: "Alisson Becker",
      imgUrl: alissonBeckerImg,
    },
    {
      name: "Virgil van Dijk",
      imgUrl: virgilVanDijkImg,
    },
    {
      name: "Virgil van Dijk",
      imgUrl: virgilVanDijkImg,
    },
    {
      name: "Virgil van Dijk",
      imgUrl: virgilVanDijkImg,
    },
    {
      name: "Virgil van Dijk",
      imgUrl: virgilVanDijkImg,
    },
    {
      name: "Virgil van Dijk",
      imgUrl: virgilVanDijkImg,
    },
    {
      name: "Virgil van Dijk",
      imgUrl: virgilVanDijkImg,
    },
    {
      name: "Virgil van Dijk",
      imgUrl: virgilVanDijkImg,
    },
    {
      name: "Virgil van Dijk",
      imgUrl: virgilVanDijkImg,
    },
    {
      name: "Virgil van Dijk",
      imgUrl: virgilVanDijkImg,
    },
    {
      name: "Virgil van Dijk",
      imgUrl: virgilVanDijkImg,
    },
  ],
};

const teams = {
  firstTeam,
  secondTeam,
};

export { teams };
