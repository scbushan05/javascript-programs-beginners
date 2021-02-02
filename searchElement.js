/*
    Pass an int array and an int and do a search of the second parameter in the first, and return true/false.
*/

const searchElement = (array, number) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === number) {
            return true;
        }
    }
    return false;
}

console.log(searchElement([33,44,21,98,27,94], 21)); //true
console.log(searchElement([1232,432,546,980,984], 980)); //true
console.log(searchElement([3,4,9,87,29], 2)); //false