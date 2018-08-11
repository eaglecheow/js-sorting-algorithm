export const arrayGenerator = (length = 10, maxNumber = 10) => {
    let generatedArray = [];

    for (let i = 0; i < length; i++) {
        generatedArray[i] = Math.floor(Math.random() * maxNumber);
    }

    return generatedArray;
};
