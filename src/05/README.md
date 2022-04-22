## Kata n.05

**Date:** 22/04/2022

**Topic:** Count the triplets

### Description:

A triplet, in the context of this challenge, is a sequence of 3 numbers where the relation between the numbers is defined by a given `ratio`.

Example:

```
ratio: 3
1, 3, 9  is a triplet (1 * 3 = 3; 3 * 3 = 9)

ratio: 4
5, 20, 80 is a triplet ( 5 * 4 = 20; 20 * 4 = 80 )
```

### Goal

Your `countTriplets` function will receive:

-   an array of numbers, in ascendent order
-   a `ratio` number

Based on this data you need to provide the number of **triplets of indices** that are available in the provided sequence

Example:

```
ratio: 5
Sequence: 1, 5, 25, 125

in this case the result is: 2

Explanation:
1, 5, 25 is a triplet (indices 0, 1, 2)
5, 25, 125 is another triplet (indices 1, 2, 3)

```

### Important:

Since the method is going to return the amount of **triplets of indices**, and since `sequence` can contain repeated numbers, it is possible that multiple identical triplets are available (same values, but from different indexes) and they need to be counted.

Example:

```
ratio: 3
Sequence: 1, 3, 9, 9, 27, 81

Result is: 6

Explanation:
1, 3, 9 is a triplet (indices 0, 1, 2)
1, 3, 9 is a triplet (indices 0, 1, 3)
3, 9, 27 is a triplet (indices 1, 2, 4)
3, 9, 27 is a triplet (indices 1, 3, 4)
9, 27, 81 is a triplet (indices 2, 4, 5)
9, 27, 81 is a triplet (indices 3, 4, 5)

```

## Constraints

-   `sequence` is in ascendent order
-   `sequence` can contain the same value multiple times
-   triplets are in ascendent order (if ratio is `r`, triplet `i`-`j`-`k` where `i` is any number: `j = i * r` and `k: j * r` )

### Implementation details:

The function called `countTriplets` is already bootstrapped in `src/05/index.tsx`. Put your code inside here.
When you're done, run `yarn test` to verify that your solution is correct.
