import { LineUp } from "../../../types/line-up.type";
import { type StartPlayer } from "../../../types";
import { type CssPosition } from "../types/css-position.type.ts";

const KEEPER_COLUMN_POSITION = 10;
const MIDDLE_COLUMN_POSITION = 50;

const FIRST_COLUMN_POSITION = 22;
const LAST_COLUMN_POSITION = 85;

const FIRST_ROW_POSITION = 10;
const LAST_ROW_POSITION = 85;

const DEFAULT_GAP = 18;

type PlayersPerRow = {
  players: number;
  gap: number;
  firstRowPosition: number;
};

const INITIAL_PLAYERS_PER_ROW_OBJECT = {
  players: 0,
  gap: 0,
  firstRowPosition: 0,
};

const countPlayersByColumns = (players: StartPlayer[]) => {
  const playersPerRow: { [name: string]: PlayersPerRow } = {};
  for (const { player } of players) {
    const [originalColumn] = player.grid.split(":");
    const column = Number(originalColumn) - 1;

    if (!playersPerRow[column]) {
      playersPerRow[column] = { ...INITIAL_PLAYERS_PER_ROW_OBJECT };
    }

    playersPerRow[column].players += 1;
  }

  for (const key in playersPerRow) {
    const playersInRow = playersPerRow[key].players;
    const rowGap =
      (LAST_ROW_POSITION - FIRST_ROW_POSITION) / (playersInRow - 1);
    const minGap = Math.min(rowGap, DEFAULT_GAP);
    const firstRowPosition = (100 - minGap * (playersInRow - 1)) / 2;

    playersPerRow[key].gap = minGap;
    playersPerRow[key].firstRowPosition = firstRowPosition;
  }

  return playersPerRow;
};

const createPlayersGrid = (lineUp: LineUp) => {
  const lineUpPositions = [];

  for (const team of lineUp) {
    const teamCols = team.formation.split("-").length;
    const colGap =
      (LAST_COLUMN_POSITION - FIRST_COLUMN_POSITION) / (teamCols - 1);
    console.log(colGap);
    const gridToCssPositionMap: { [name: string]: CssPosition } = {};

    const playersPerColumn = countPlayersByColumns(team.startXI);

    for (const { player } of team.startXI) {
      const position = player.grid.split(":");
      const column = Number(position[0]) - 1;
      const row = Number(position[1]) - 1;

      const playerPositionLeft =
        column === 0
          ? KEEPER_COLUMN_POSITION
          : colGap * (column - 1) + FIRST_COLUMN_POSITION;
      const playerPositionTop =
        playersPerColumn[column].players === 1
          ? MIDDLE_COLUMN_POSITION
          : playersPerColumn[column].gap * row +
            playersPerColumn[column].firstRowPosition;

      gridToCssPositionMap[player.grid] = { left: 0, top: 0 };
      gridToCssPositionMap[player.grid].left = playerPositionLeft;
      gridToCssPositionMap[player.grid].top = playerPositionTop;
    }

    lineUpPositions.push(gridToCssPositionMap);
  }

  return lineUpPositions;
};

export { createPlayersGrid };
