import { GameOfLife } from "./game-of-life";

interface GetNextStateOptions {
    underpopLimit: number;
    overpopLimit: number;
    resurNumber: number;
    valueOfCellsOutsideTheBoard: boolean;
}

export function getNextState(prevBoard: boolean[], rows: number, cols: number, options: GetNextStateOptions): boolean[] {
    const { underpopLimit, overpopLimit, resurNumber, valueOfCellsOutsideTheBoard } = options;
    const gameOfLife = new GameOfLife(rows, cols, underpopLimit, overpopLimit, resurNumber, valueOfCellsOutsideTheBoard);
    gameOfLife.setupBoardArray(prevBoard);
    return gameOfLife.getNextStateArray();
}