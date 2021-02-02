const sumOfDigits = (num) => {
    let sum = 0;
    let rem;
    while (num != 0) {
        rem = num % 10;
        sum += rem;
        num = parseInt(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(144)); //9
console.log(sumOfDigits(457)); //16
console.log(sumOfDigits(345)); //12