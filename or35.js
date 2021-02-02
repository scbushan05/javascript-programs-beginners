/*
    Return true if the given non-negative number is a multiple of 3 or a multiple of 5.
*/

const or35 = (num) => {
    if (num % 3 === 0 || num % 5 === 0) {
        return true;
    }
    return false;
}

console.log(or35(15)); //true
console.log(or35(8)); //false
console.log(or35(12)); //true