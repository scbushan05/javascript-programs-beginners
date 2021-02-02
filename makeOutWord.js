const makeOutWord = (out, word) => {
    return out.substr(0, 2) + word + out.substr(2, 4);
}

console.log(makeOutWord("<<>>", "Yay")); //<<Yay>>
console.log(makeOutWord("<<>>", "WooHoo")); //[[Word]]
console.log(makeOutWord("[[]]", "word")); //((JAVA))