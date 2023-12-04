// Topic : String 
const name = "Umair";
const repoCount = 30;
// console.log(`${name} ${repoCount}`)

// another way of declaring string

const studentName = new String("Umair")
// console.log(studentName)
// Accessing the string character 

// console.log(studentName[0])
// console.log(studentName[1])
// console.log(studentName[2])
// console.log(studentName[3])
// console.log(studentName[4])
// console.log(studentName.length)

// Some String Methods
// console.log(studentName.toUpperCase())
// console.log(studentName.toLowerCase())
// console.log(studentName.charAt(2)) // a // return krta h character 
// console.log(studentName.indexOf('a')) // a  // kis index pr h return krta h index number 
// const newString = studentName.substring(0,4)
// console.log(newString)  // Umai last value not included

// console.log(studentName.replace("Umair","Uzair"))
// console.log(studentName)
// console.log(studentName.includes('m')) // true


// const str = "Hello _ Java _ Script _ World"
// console.log(str.split('-'))



// Summary

// charAt(index): Returns the character at the specified index in a string.
let str = "Hello";
let char = str.charAt(1); // Returns 'e'


// concat(str1, str2, ...): Combines two or more strings.
let str1 = "Hello";
let str2 = " World";
let combined = str1.concat(str2); // Returns 'Hello World'

// indexOf(searchStr): Returns the index of the first occurrence of a specified substring.
let str3 = "Hello World";
let index = str3.indexOf("World"); // Returns 6

// replace(searchValue, replaceValue): Replaces a specified value or regex pattern with another value.


let str4 = "Hello World";
let replaced = str4.replace("World", "Universe"); // Returns 'Hello Universe'


// split(separator): Splits a string into an array of substrings based on a specified separator.

let str5 = "apple,orange,banana";
let fruits = str5.split(","); // Returns ['apple', 'orange', 'banana']


