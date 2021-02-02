const sum28 = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 2) {
            sum += 2;
        }
    }
    if (sum === 8) {
        return true;
    }
    return false;
}

console.log(sum28([10,20,30,40,50,60,2])); //false
console.log(sum28([2,10,7,2,2,2])); //true
console.log(sum28([5,6,1,2,2,2])); //false