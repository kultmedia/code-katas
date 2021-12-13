const assert = require("assert");
import { twelveDaysOfChristmas } from "../../src/03";
const fs = require("fs");
const path = require("path");

describe("Twelve days of Christmas", () => {
    it("Should generate the correct lyrics for 12 days of christmas", () => {
        {
            const result = twelveDaysOfChristmas();

            const lyricsFile = path.join(__dirname, "./", "lyrics.txt");
            const lyrics = fs.readFileSync(
                lyricsFile,
                "utf8",
                function (err: any, data: any) {
                    return data;
                }
            );

            assert.equal(
                result.replace(/(\r\n|\n|\r)/gm, "\n"),
                lyrics.replace(/(\r\n|\n|\r)/gm, "\n")
            );
        }
    });
});
