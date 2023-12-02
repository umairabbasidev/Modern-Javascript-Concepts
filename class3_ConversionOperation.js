// Topic Conversion Opertion

// let score = 33;
// let score = '33';


 // convert string into numbeer 

// console.log(typeof score)  // string
// console.log(typeof (score))  // string

// let convertInNumver = Number(score)
// console.log(typeof (convertInNumver)) // number
// console.log(convertInNumver) // 33

// console.log(typeof convertInNumver) //number

// let score = '33a';
// console.log(typeof score)  // string
// console.log(typeof (score))  // string

// let convertInNumver = Number(score)
// console.log(typeof (convertInNumver)) // number
// console.log(convertInNumver) // NaN

// console.log(typeof NaN) //number


// let score = null;
// console.log(typeof score)  // object
// console.log(typeof (score))  // object

// let convertInNumver = Number(score)
// console.log(typeof (convertInNumver)) // number
// console.log(convertInNumver) // 0

// console.log(typeof null) // object



// let score = undefined;
// console.log(typeof score)  // undefined
// console.log(typeof (score))  // undefined

// let convertInNumver = Number(score)
// console.log(typeof (convertInNumver)) // number
// console.log(convertInNumver) // NaN

// console.log(typeof undefined) // undefined





// let score = true;
// console.log(typeof score)  // boolean
// console.log(typeof (score))  // boolean

// let convertInNumver = Number(score)
// console.log(typeof (convertInNumver)) // number
// console.log(convertInNumver) // 1

// console.log(typeof true) // boolean



// let score = false;
// console.log(typeof score)  // boolean
// console.log(typeof (score))  // boolean

// let convertInNumver = Number(score)
// console.log(typeof (convertInNumver)) // number
// console.log(convertInNumver) // 0

// console.log(typeof false) // boolean



// let score = "";
// console.log(typeof score)  // string
// console.log(typeof (score))  // string

// let convertInNumver = Number(score)
// console.log(typeof (convertInNumver)) // number
// console.log(convertInNumver) // 0

// console.log(typeof "") // string



// let score = "umair";
// console.log(typeof score)  // string
// console.log(typeof (score))  // string

// let convertInNumver = Number(score)
// console.log(typeof (convertInNumver)) // number
// console.log(convertInNumver) // NaN

// console.log(typeof "") // string




// let score = [];
// console.log(typeof score)  // object
// console.log(typeof (score))  // object

// let convertInNumver = Number(score)
// console.log(typeof (convertInNumver)) // number
// console.log(convertInNumver) // 0

// console.log(typeof []) // object



// let score = ["z",1,3];
// console.log(typeof score)  // object
// console.log(typeof (score))  // object

// let convertInNumver = Number(score)
// console.log(typeof (convertInNumver)) // number
// console.log(convertInNumver) // NaN

// console.log(typeof []) // object



// Note 
// "33" => 33
// "33abc" => NaN // console.log(typeof NaN) number
// "" => 0
//  "umair"=> NaN
// [] => 0
// [1,2,3] => false
// true => 1
// false => 0


// console.log(typeof NaN)


// convert number into boolean

// let isLoggedIn = 1;
// console.log(typeof isLoggedIn) // number
// let convertInBoolean = Boolean (isLoggedIn)

// console.log(typeof converInBoolean) // boolean
// console.log(convertInBoolean) // true


// let isLoggedIn = 0;
// console.log(typeof isLoggedIn) // number
// let convertInBoolean = Boolean (isLoggedIn)

// console.log(typeof convertInBoolean) // boolean
// console.log(convertInBoolean) // false


// let isLoggedIn = "";
// console.log(typeof isLoggedIn) // string
// let convertInBoolean = Boolean (isLoggedIn)

// console.log(typeof convertInBoolean) // boolean
// console.log(convertInBoolean) // false


// let isLoggedIn = "umair";
// console.log(typeof isLoggedIn) // string
// let convertInBoolean = Boolean (isLoggedIn)

// console.log(typeof convertInBoolean) // boolean
// console.log(convertInBoolean) // true



// let isLoggedIn = [];
// console.log(typeof isLoggedIn) // string
// let convertInBoolean = Boolean (isLoggedIn)

// console.log(typeof convertInBoolean) // boolean
// console.log(convertInBoolean) // true



let number = 33;
let convertInString = String(number)

console.log(convertInString)  // 33
console.log(typeof convertInString)  // string
