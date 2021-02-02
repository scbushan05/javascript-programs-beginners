const nTwice = (str, n) => {
    return str.substr(0, n) + str.substr(str.length - n, str.length);
}

console.log(nTwice("Hello", 2)); //Helo
console.log(nTwice("Chocolate", 3)); //Choate
console.log(nTwice("java", 1)); //ja