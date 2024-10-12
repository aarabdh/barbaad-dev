import { GameOfLife } from "./game-of-life";

export function getNextState(prevBoard: boolean[], rows: number, cols: number, underpopLimit = 2, overpopLimit = 3, resurNumber = 3,
    valueOfCellsOutsideTheBoard: boolean = false
): boolean[] {
    const gameOfLife = new GameOfLife(rows, cols, underpopLimit, overpopLimit, resurNumber, valueOfCellsOutsideTheBoard);
    gameOfLife.setupBoardArray(prevBoard);
    return gameOfLife.getNextStateArray();
}