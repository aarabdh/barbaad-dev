import { GameOfLife } from '../game-of-life';

describe('GameOfLife', () => {
  describe('Constructor and Setup', () => {
    it('should create a GameOfLife instance with default parameters', () => {
      const game = new GameOfLife(3, 3);
      expect(game).toBeInstanceOf(GameOfLife);
    });
  });

  describe('Game Rules', () => {
    let game: GameOfLife;

    beforeEach(() => {
      game = new GameOfLife(3, 3);
    });

    it('should correctly apply overpopulation rule', () => {
      const initBoard = [
        true , true , true ,
        false, true , false,
        true , true , true ,
      ]
      const finalBoard = [
        true , true , true ,
        false, false, false,
        true , true , true ,
      ]
      game.setupBoardArray(initBoard);
      const nextState = game.getNextStateArray();
      expect(nextState).toStrictEqual(finalBoard);
    });

    it('should correctly apply resurrection rule', () => {
      const initBoard = [
        true , true , false,
        false, false, false,
        true , false, false,
      ]
      const finalBoard = [
        false, false, false,
        true , true , false,
        false, false, false,
      ]
      game.setupBoardArray(initBoard);
      const nextState = game.getNextStateArray();
      expect(nextState).toStrictEqual(finalBoard);
    });

    it('should keep alive cells with 2 or 3 neighbors', () => {
      const initBoard = [
        false, true , true ,
        false, true , false,
        false, true , true ,
      ]
      const finalBoard = [
        false, true , true ,
        true , false, false,
        false, true , true ,
      ]
      game.setupBoardArray(initBoard);
      const nextState = game.getNextStateArray();
      expect(nextState).toStrictEqual(finalBoard);
    });
  });

  describe('Board Configurations', () => {
    it('should correctly evolve a glider pattern', () => {
      const game = new GameOfLife(5, 5);
      const initBoard = [
        false, false, false, false, false,
        false, false, true , false, false,
        false, false, false, true, false,
        false, true , true , true , false,
        false, false, false, false, false
      ]
      const finalBoard = [
        false, false, false, false, false,
        false, false, false, false, false,
        false, true , false, true , false,
        false, false, true , true , false,
        false, false, true , false, false
      ]
      game.setupBoardArray(initBoard)
      const nextState = game.getNextStateArray();
      expect(nextState).toStrictEqual(finalBoard);
    });

    it('should handle board edges correctly', () => {
      const game = new GameOfLife(3, 3, 2, 6, 2, true);
      const initBoard = [
        true , false, true ,
        true , false, true ,
        true , false, true
      ]
      game.setupBoardArray(initBoard);
      const nextState = game.getNextStateArray();
      expect(nextState).toStrictEqual(initBoard);
    });
  });
});