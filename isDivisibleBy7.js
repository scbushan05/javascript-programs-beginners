/* 
    Pass an int as parameter. Test whether the number is divisible by 7 or not
*/
const isDivisibleBy7 = (num) => {
    if (num % 7 === 0) {
        return true;
    }
    return false;
}

console.log(isDivisibleBy7(17)); //false
console.log(isDivisibleBy7(77)); //true
console.log(isDivisibleBy7(12)); //false