/*
    Given an array of 'N' elements .Return the sum of all array elements
*/

const arraySum = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

console.log(arraySum([5,5,5,5,5])); //25
console.log(arraySum([1,3,4,7,8])); //23
console.log(arraySum([100,200,300])); //600