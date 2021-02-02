/*
    Pass a string as parameter. Find out how many vowels present in it
*/

const countVowels = (str) => {
    let count = 0;
    const vowels = 'aeiou';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("instanceof is for references only")); //11
console.log(countVowels("Object Oriented")); //6
console.log(countVowels("Design Patterns")); //4