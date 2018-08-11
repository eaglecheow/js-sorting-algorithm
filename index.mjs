import { arrayGenerator } from "./arrayGeneratir.mjs";
import { bubbleSort } from "./bubbleSort.mjs";
import { countingSort } from "./countingSort.mjs";
import { mergeSort } from "./mergeSort.mjs";

const generatedArray = arrayGenerator(1000, 1000);

// console.log('generatedArray :', generatedArray);

let startTime;
let endTime;

startTime = Date.now();
const bubbleSortedArray = bubbleSort(generatedArray);
endTime = Date.now();
const bubbleTime = endTime - startTime;

// console.log('bubbleSortedArray :', bubbleSortedArray);
console.log(`Bubble Sort Time: ${bubbleTime} ms`);

startTime = Date.now();
const countingSortedArray = countingSort(generatedArray);
endTime = Date.now();
const countingTime = endTime - startTime;

// console.log('countingSortedArray :', countingSortedArray);
console.log(`Counting Sort Time: ${countingTime} ms`);

startTime = Date.now();
const mergeSortedArray = mergeSort(generatedArray);
endTime = Date.now();
const mergeTime = endTime - startTime;

// console.log('mergeSortedArray :', mergeSortedArray);
console.log(`Merging sort time: ${mergeTime} ms`);
