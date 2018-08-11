export const countingSort = (inputArray = []) => {
    if (inputArray.length <= 1) return inputArray;

    let countingArray = [];
    let resultArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        let number = inputArray[i];

        if (!countingArray[number]) countingArray[number] = 1;
        else countingArray[number]++;
    }

    for (let i = 0; i < countingArray.length; i++) {
        if (!countingArray[i]) countingArray[i] = 0;
        if (i > 0) countingArray[i] = countingArray[i] + countingArray[i - 1];
    }

    for (let i = 0; i < inputArray.length; i++) {
        const number = inputArray[i];
        let placingIndex = --countingArray[number];
        resultArray[placingIndex] = number;
    }

    return resultArray;
};
