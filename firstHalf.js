const firstHalf = (str) => {
    return str.substr(0, str.length/2);
}

console.log(firstHalf("HelloThere")); //Hello
console.log(firstHalf("abcdef")); //abc
console.log(firstHalf("Word")); //Wo