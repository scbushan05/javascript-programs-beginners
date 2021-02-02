const stringE = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'e') {
            count++;
        }
    }
    if (count === 1 || count === 3) {
        return true;
    }
    return false;
}

console.log(stringE('Hello')); //true
console.log(stringE('Heelele')); //false
console.log(stringE('Heelle')); //true