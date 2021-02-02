const arrayFront9 = (array) => {
    const index = array.indexOf(9);
    if (index == -1 || index > 4) {
        return false;
    }
    return true;
}

console.log(arrayFront9([1,2,9,3,4])); //true
console.log(arrayFront9([9,2,3,4,56])); //true
console.log(arrayFront9([2,3,4,5])); //false