import { checkSort } from "./checkSort.mjs";

export const bubbleSort = (inputArray = []) => {
    if (inputArray.length <= 1) return inputArray;

    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] > inputArray[i + 1]) {
            //Swapping values
            let temperory = inputArray[i];
            inputArray[i] = inputArray[i + 1];
            inputArray[i + 1] = temperory;
        }
    }

    if (!checkSort(inputArray)) {
        return bubbleSort(inputArray);
    } else {
        return inputArray;
    }
};
