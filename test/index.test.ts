const assert = require("assert");
import { sampleFunc } from "../src";

describe("Sample Function", () => {
    it("Should return the sum of numbers in the sequence", () => {
        {
            const input = [2, 4, 5, 8];
            const expectedOutput = 19;

            const result = sampleFunc(input);

            assert.equal(expectedOutput, result);
        }

        {
            const input = [1, 2, 3];
            const expectedOutput = 6;

            const result = sampleFunc(input);

            assert.equal(expectedOutput, result);
        }

        {
            const input = [1];
            const expectedOutput = 1;

            const result = sampleFunc(input);

            assert.equal(expectedOutput, result);
        }
    });

    it("Should return 0 if sequence is empty", () => {
        const input = [] as number[];
        const expectedOutput = 0;

        const result = sampleFunc(input);

        assert.equal(expectedOutput, result);
    });
});
