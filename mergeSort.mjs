export const mergeSort = (inputArray = []) => {
    if (inputArray.length <= 1) return inputArray;

    const middleIndex = Math.floor(inputArray.length / 2);
    const leftArray = inputArray.slice(0, middleIndex);
    const rightArray = inputArray.slice(middleIndex, inputArray.length);

    const leftSortedArray = mergeSort(leftArray);
    const rightSortedArray = mergeSort(rightArray);

    return mergeArray(leftSortedArray, rightSortedArray);
};

const mergeArray = (arrayOne = [], arrayTwo = []) => {
    let mergedArray = [];

    while (arrayOne.length && arrayTwo.length) {
        let arrayOneNumber = arrayOne[0];
        let arrayTwoNumber = arrayTwo[0];

        if (arrayOneNumber < arrayTwoNumber) {
            mergedArray.push(arrayOneNumber);
            arrayOne.splice(0, 1);
        } else {
            mergedArray.push(arrayTwoNumber);
            arrayTwo.splice(0, 1);
        }
    }

    return [...mergedArray, ...arrayOne, ...arrayTwo];
};
