/*
    Given a string, return a new string where the first and last chars have been exchanged. 
    frontBack("code") -> "eodc" , frontBack("a") -> "a" , frontBack("ab")-> "ba" , frontBack("PrograM")-> "MrograP" ,
*/

const frontBack = (str) => {
    return str[str.length-1] + str.substring(1, str.length-1) + str[0];
}

console.log(frontBack("abcd")); //dbca
console.log(frontBack("Bee")); //eeB
console.log(frontBack("MazE")); //EazM