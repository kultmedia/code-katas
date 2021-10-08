# CS101 - Code Katas 🥋

This repo contains the challenges that are part of the Styla "**CS101 - Code Katas**" events.

---

## How to run

-   Clone this project locally
-   run `yarn` to install dependencies
-   Write your code in `src/index.tsx`
-   run `yarn start`. Changes to the code are automatically detected and will trigger an automatic restart of the service.

## How to run tests

-   run `yarn test`. This will test the ouput of your function (based on the current challenge) and inform you on the success or failure.

---

## Kata n.1

**Date:** 8/10/2021

**Topic:** Minimum Array swaps

**Description:**
You are given an unordered array of numbers. There are no duplicates and no missing numbers. The size of the array might vary, but the lowest number is always 1. This array was "scrambled" by using _n_ times a hypothetical "swap" function, which is taking 2 indexes and swapping the numbers contained in these indexes.

Example:

```
[1, 2, 3, 4, 5] => original sequence
swap(0, 2);
[3, 2, 1, 4, 5 ] => new sequence

```

The goal is to indicate the **minimum number** of swaps necessary in order to sort back the array in ascending order.

Example:

```
[2, 3, 4, 1, 5]

In this case the expected result is: 3

Explanation:
[2, 3, 4, 1, 5]
swap(0, 3) => [1, 3, 4, 2, 5]
swap(1, 3) => [1, 2, 4, 3, 5]
swap(2, 3) => [1, 2, 3, 4, 5]

```

**Implementation details:**
The function called `minimumSwaps` is already bootstrapped in `src/index.tsx`. Put your logic inside here.
When you're done run `yarn test` to verify if your solution is correct.

---

## Questions?

This repo is maintained by [@antoniocosentino](https://github.com/antoniocosentino). For any question [open an issue](https://github.com/kultmedia/code-katas/issues) or find me on Slack.
