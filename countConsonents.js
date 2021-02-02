/*
    Accept a string as parameter. Find out how many consonants present in it.
*/

const countConsonents = (str) => {
    let count = 0;
    const vowels = 'bcdfghjklmnpqrstvwxyz';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(countConsonents("instanceof is for references only")); //18
console.log(countConsonents("Object Oriented")); //8
console.log(countConsonents("Design Patterns")); //10