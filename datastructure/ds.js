
// top data structure interview questions

// 1. Reverse a string: Write a function that takes a string as input and returns the reversed version of that string. For example, if the input is "Hello, World!", the output should be "!dlroW ,olleH".

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('Hello, World!'));

// using for loop
function reverseString2(str) {
    let reversed = '';
    for (let i = str.length-1; i >= 0; i-- ) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString2('Hello, World!'));