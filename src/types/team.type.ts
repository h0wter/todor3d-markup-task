import { type Coach } from "./coach.type.ts";
import { type Player } from "./player.type.ts";

type Team = {
  name: string;
  coach: Coach;
  imgUrl: string;
  formation: string;
  players: Player[];
};

export { type Team };
