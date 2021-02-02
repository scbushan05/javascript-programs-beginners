const generateFibSeries = (limit) => {
    let first = 0;
    let second = 1;
    let array = [];
    for (let index = 0; index < limit; index++) {
        array.push(first);
        first = first + second;
        second = first - second;
    }
    return array;
}

console.log(generateFibSeries(5)); //[0,1,1,2,3]
console.log(generateFibSeries(7)); //[0,1,1,2,3,5,8]
console.log(generateFibSeries(10)); //[0,1,1,2,3,5,8,13,21,34]