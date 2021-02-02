/* 
    Check the given number is odd or even
*/
const testOddEven = (num) => {
    if (num % 2 === 0) {
        return 'even';
    }
    return 'odd';
}

console.log(testOddEven(12)); //even
console.log(testOddEven(3)); //odd
console.log(testOddEven(-55)); //odd