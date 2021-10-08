const assert = require("assert");
import { minimumSwaps } from "../src";

describe("Minimum swaps", () => {
    it("Should return the minimum number of swaps required to obtain the ordered sequence", () => {
        {
            const input = [4, 3, 1, 2];
            const expectedOutput = 3;

            const result = minimumSwaps(input);

            assert.equal(expectedOutput, result);
        }
        {
            const input = [2, 3, 4, 1, 5];
            const expectedOutput = 3;

            const result = minimumSwaps(input);

            assert.equal(expectedOutput, result);
        }
        {
            const input = [1, 3, 5, 2, 4, 6, 7];
            const expectedOutput = 3;

            const result = minimumSwaps(input);

            assert.equal(expectedOutput, result);
        }
        {
            const input = [1, 2, 10, 4, 5, 6, 7, 8, 9, 3, 11, 12];
            const expectedOutput = 1;

            const result = minimumSwaps(input);

            assert.equal(expectedOutput, result);
        }
        {
            const input = [
                15, 2, 3, 7, 12, 6, 16, 8, 9, 10, 11, 5, 13, 14, 1, 4, 17, 18,
                19, 20,
            ];
            const expectedOutput = 4;

            const result = minimumSwaps(input);

            assert.equal(expectedOutput, result);
        }
        {
            const input = [
                15, 2, 3, 7, 12, 6, 4, 8, 10, 9, 11, 5, 13, 14, 1, 16, 17, 18,
                19, 20,
            ];
            const expectedOutput = 4;

            const result = minimumSwaps(input);

            assert.equal(expectedOutput, result);
        }
        {
            const input = [7, 1, 3, 2, 4, 5, 6];
            const expectedOutput = 5;

            const result = minimumSwaps(input);

            assert.equal(expectedOutput, result);
        }
    });

    it("If sequence is already ordered, should return 0", () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const expectedOutput = 0;

        const result = minimumSwaps(input);

        assert.equal(expectedOutput, result);
    });
});
