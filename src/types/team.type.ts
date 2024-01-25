import { type Coach } from "./coach.type.ts";
import { type StartPlayer } from "./start-player.type.ts";
import { type SubstitutePlayer } from "./substitute-player.type.ts";
import { type TeamInfo } from "./team-info.type.ts";

type Team = {
  team: TeamInfo;
  coach: Coach;
  formation: string;
  startXI: StartPlayer[];
  substitutes: SubstitutePlayer[];
};

export { type Team };
