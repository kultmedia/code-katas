const assert = require("assert");
import { checkForWinner } from "../../src/02";
import { TBoardMatrix, TWinnerState } from "../../src/02/types";

describe("Connect Four - Check for Winner", () => {
    it("An empty board", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
            ] as TBoardMatrix;

            const expectedOutput = "NO-WINNER" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A basic case with horizontal winner", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [2, 2, 1, 1, 1, 1, 2],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER1" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("Another basic case with horizontal winner", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 2, 2, 2, 2],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER2" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A slightly more complex case with horizontal winner", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 0, 0],
                [1, 2, 2, 2, 1, 2, 2],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER1" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("Another slightly more complex case with horizontal winner", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 2],
                [0, 0, 0, 1, 0, 0, 1],
                [0, 2, 2, 2, 2, 0, 1],
                [0, 1, 2, 2, 1, 0, 1],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER2" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A basic case with vertical winner", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 2, 1, 2, 2, 0, 0],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER1" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A slightly more complex case with vertical winner", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 2, 2, 1, 0, 0],
                [0, 1, 2, 1, 2, 1, 1],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER2" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A complex tie, with no winners", () => {
        {
            const board = [
                [2, 1, 2, 1, 2, 1, 2],
                [2, 1, 2, 2, 2, 1, 2],
                [1, 2, 1, 1, 1, 2, 1],
                [2, 1, 2, 2, 2, 1, 2],
                [1, 2, 1, 1, 1, 2, 1],
                [1, 2, 1, 2, 1, 2, 1],
            ] as TBoardMatrix;

            const expectedOutput = "NO-WINNER" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A case with a diagonal ascending winner", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0],
                [0, 1, 2, 2, 0, 0, 0],
                [1, 2, 1, 2, 0, 0, 0],
                [2, 1, 2, 1, 1, 0, 0],
                [1, 2, 1, 1, 2, 0, 0],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER2" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("Another case with a diagonal ascending winner", () => {
        {
            const board = [
                [0, 0, 0, 2, 0, 2, 0],
                [0, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 1, 2, 1, 0],
                [0, 0, 1, 1, 2, 1, 0],
                [0, 1, 2, 2, 1, 2, 0],
                [2, 2, 2, 1, 2, 1, 0],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER1" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A 3rd case with a diagonal ascending winner", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 0],
                [0, 0, 0, 2, 1, 0, 0],
                [0, 1, 2, 1, 2, 0, 0],
                [0, 2, 1, 1, 2, 0, 0],
                [1, 2, 1, 1, 2, 0, 0],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER2" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A case with diagonal descending winner", () => {
        {
            const board = [
                [0, 0, 1, 2, 2, 2, 0],
                [0, 2, 2, 1, 1, 1, 0],
                [2, 1, 1, 1, 2, 1, 0],
                [1, 2, 2, 1, 2, 2, 0],
                [2, 1, 2, 2, 1, 1, 0],
                [1, 1, 2, 2, 1, 2, 0],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER2" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("Another case with diagonal descending winner", () => {
        {
            const board = [
                [0, 0, 0, 2, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 2, 1, 1, 0, 0],
                [0, 2, 1, 1, 2, 1, 0],
                [0, 1, 2, 2, 1, 2, 1],
                [2, 2, 1, 1, 2, 1, 2],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER1" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A 3rd case with diagonal ascending winner", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 2],
                [0, 0, 0, 0, 0, 2, 1],
                [0, 2, 2, 1, 2, 1, 1],
                [2, 2, 1, 2, 1, 1, 1],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER2" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("Four in a row but not in sequence (Horizontal)", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 2],
                [1, 2, 1, 2, 1, 2, 1],
            ] as TBoardMatrix;

            const expectedOutput = "NO-WINNER" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("Four in a row but not in sequence (Vertical)", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0],
                [2, 2, 0, 0, 0, 0, 0],
                [1, 2, 0, 0, 0, 0, 0],
            ] as TBoardMatrix;

            const expectedOutput = "NO-WINNER" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("Four in a row but not in sequence (Diagonal)", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 2, 2, 0, 0],
                [0, 0, 1, 1, 1, 0, 0],
                [0, 1, 1, 2, 2, 0, 0],
                [1, 2, 2, 2, 1, 0, 0],
            ] as TBoardMatrix;

            const expectedOutput = "NO-WINNER" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A 'real match' case with horizontal winner", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 2],
                [0, 0, 2, 2, 0, 0, 1],
                [2, 1, 1, 1, 1, 0, 2],
                [2, 2, 1, 1, 1, 0, 2],
                [1, 2, 2, 1, 1, 0, 2],
            ] as TBoardMatrix;

            const expectedOutput = "PLAYER1" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A potential false positive (horizontal)", () => {
        {
            const board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [2, 0, 0, 0, 1, 1, 1],
                [1, 0, 0, 0, 2, 2, 2],
            ] as TBoardMatrix;

            const expectedOutput = "NO-WINNER" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });

    it("A potential false positive (vertical)", () => {
        {
            const board = [
                [0, 1, 0, 0, 0, 0, 0],
                [0, 2, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0],
                [1, 2, 0, 0, 0, 0, 0],
                [1, 2, 0, 0, 0, 0, 0],
                [1, 2, 1, 2, 0, 0, 0],
            ] as TBoardMatrix;

            const expectedOutput = "NO-WINNER" as TWinnerState;

            const result = checkForWinner(board);

            assert.equal(result, expectedOutput);
        }
    });
});
