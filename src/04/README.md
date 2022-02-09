## Kata n.04

**Date:** 11/02/2022

**Topic:** Ransom Note

### Description:

[Willem](https://en.wikipedia.org/wiki/Willem_Holleeder) is a kidnapper and you're helping him with the creation of a ransom note. Since you don't want to be traced through your handwriting, you decide that you will cut out words from a magazine page. You can only cut whole words, not portions. Once you use a word, it's not available anymore. If you need the same word multiple times it needs to be available multiple times in the magazine.

### Goal

Your function will accept 2 parameters:

-   `note` (string): the note that you want to write
-   `magazine` (string): the magazine page where we take the words from

Return `true` if the note can be composed. Return `false` if it's not possible.

### Implementation details:

The function called `ransomNote` is already bootstrapped in `src/04/index.tsx`. Put your code inside here. To execute the code simply run `yarn start`.
When you're done, run `yarn test` to verify that your solution is correct.

### Remember

-   You don't have to care about case. All the test scenarios are in lowercase.
-   Magazine pages can contain repeated words. Your note can contain repeated words as well.
-   To make things easier, there is no formatting: both `note` and `magazine` are just a sequence of words, without punctuation or line breaks.
