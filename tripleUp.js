const tripleUp = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i+1] === nums[i] + 1 && nums[i+2] === nums[i] + 2) {
            return true;
        }
    }
    return false;
}

console.log(tripleUp([1,2,3,7,5,9])); //true
console.log(tripleUp([1,4,5,6,2])); //true
console.log(tripleUp([1,2,4,5])); //false