## Kata n.01

**Date:** 8/10/2021

**Topic:** Minimum Array swaps

### Description:

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

### Implementation details:

The function called `minimumSwaps` is already bootstrapped in `src/01/index.tsx`. Put your logic inside here.
When you're done, run `yarn test` to verify that your solution is correct.
