
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

//2. Find the largest element in an array: Write a function that takes an array of numbers as input and returns the largest number in the array. For example, if the input is [4, 7, 2, 9, 1], the output should be 9.

function largestElement(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
// example
const arr = [4, 7, 2, 9, 11];
const largest = largestElement(arr);
console.log(largest)