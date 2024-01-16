type Player = {
  name: string;
  imgUrl: string;
};

type Team = {
  name: string;
  coach: string;
  imgUrl: string;
  formation: string;
  players: Player[];
};

export { type Team };
