type TInput = number[];
type TOutput = number;

export const sampleFunc = (sequence: TInput): TOutput => {
    let sum = 0;

    sequence.forEach((singleNumber) => {
        sum = sum + singleNumber;
    });

    return sum;
};
