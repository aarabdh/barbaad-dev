export class GameOfLife {
    private board: boolean[][];
    private rows: number;
    private cols: number;
    private underpopulationLimit: number;
    private overpopulationLimit: number;
    private resurrectionNumber: number;
    private outsideCells: boolean;

    constructor(rows: number, cols: number, underpopLimit = 2, overpopLimit = 3, resurNumber = 3,
        valueOfCellsOutsideTheBoard: boolean = false
    ) {
        this.rows = rows;
        this.cols = cols;
        this.underpopulationLimit = underpopLimit;
        this.overpopulationLimit = overpopLimit;
        this.resurrectionNumber = resurNumber;
        this.board = Array.from({ length: rows }, () => Array(cols).fill(false));
        this.outsideCells = valueOfCellsOutsideTheBoard
    }

    public setupBoardArray(initSetup: boolean[]) {
        this.initializeBoard(initSetup);
    }

    public getNextStateArray(): boolean[] {
        const result: boolean[] = new Array();
        this.getNextBoard().forEach((row) => row.forEach(cell => result.push(cell)))
        return result;
    }

    private getNextBoard(): boolean[][] {
        const nextBoard = Array.from({ length: this.rows }, () => Array(this.cols).fill(false));
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                nextBoard[i][j] = this.getNewCell(i, j);
            }
        }
        return nextBoard;
    }

    private getNewCell(x: number, y: number): boolean {
        return this.runAllRules(x, y, this.performSumOfNeighbours(x, y));
    }

    private runAllRules(x: number, y: number, sumOfNeighbours: number): boolean {
        let cellValue = this.board[x][y];
        return this.executeResurrectionRule(cellValue, sumOfNeighbours, this.resurrectionNumber) || (
            this.executeUnderPopulationRule(cellValue, sumOfNeighbours, this.underpopulationLimit) &&
            this.executeOverPopulationRule(cellValue, sumOfNeighbours, this.overpopulationLimit)
        )
    }

    private executeUnderPopulationRule = (current: boolean, sumOfNeighbours: number, ruleNumber: number) => 
        current && sumOfNeighbours >= ruleNumber;
    
    private executeOverPopulationRule = (current: boolean, sumOfNeighbours: number, ruleNumber: number) => 
        current && sumOfNeighbours <= ruleNumber;

    private executeResurrectionRule = (current: boolean, sumOfNeighbours: number, ruleNumber: number) => 
        !current && sumOfNeighbours === ruleNumber;

    private performSumOfNeighbours(x: number, y: number): number {
        const xOps = this.getXOperations(x);
        const yOps = this.getYOperations(y);
        let sum = 0;
        for (const xOp of xOps) {
            for (const yOp of yOps) {
                sum += this.board[x+xOp][y+yOp] ? 1 : 0;
            }
        }
        sum += this.getOutOfBoundsAddition(x, y);
        sum -= this.board[x][y] ? 1 : 0;
        return sum;
    }

    private getOutOfBoundsAddition(x: number, y: number): number {
        if (!this.outsideCells) {
            return 0;
        } else {
            return this.isCornerCell(x, y) ? 5 : this.isEdgeCell(x, y) ? 3 : 0;
        }
    }

    private isCornerCell(x: number, y: number): boolean {
        return (x == 0 && y == 0) || (x == this.rows - 1 && y == this.cols - 1) || (x == 0 && y == this.cols - 1) || (x == this.rows - 1 && y == 0);
    }

    private isEdgeCell(x: number, y: number): boolean {
        return x == 0 || x == this.rows - 1 || y == 0 || y == this.cols - 1;
    }

    private getXOperations(x: number): number[] {
        const allXOperations: number[] = new Array();
        if (x === 0) {
            allXOperations.push(0, 1);
        } else if (x === this.rows - 1) {
            allXOperations.push(-1, 0);
        } else {
            allXOperations.push(-1, 0, 1);
        }
        return allXOperations;
    }

    private getYOperations(y: number): number[] {
        const allYOperations: number[] = new Array();
        if (y === 0) {
            allYOperations.push(0, 1);
        } else if (y === this.cols - 1) {
            allYOperations.push(-1, 0);
        } else {
            allYOperations.push(-1, 0, 1);
        }
        return allYOperations;
    }

    private initializeBoard(values: boolean[]) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if ((i+1)*(j+1)>values.length) return;
                this.board[i][j] = values[i * this.cols + j];
            }
        }
    }
}