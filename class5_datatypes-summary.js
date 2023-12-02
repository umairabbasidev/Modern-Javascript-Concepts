// Topic summary of datatypes

// In offical documentation catagoration datatypes are two 
// first is primitive  // call by value
// other is non primitive // call by reference

// Primitive  // copy dia jata h 
// 7types : NN,SS,BB,U
// Number, Null, String, Symbol, Boolean, BigInt, Undefined


// Example 

// let score = 100;
// let isLoggedIn = true
// let outSideTemp = null
// let userEmail;
// let useremail = undefined

// let id = Symbol('123')// for uniqueness
// let anotherId = Symbol("123") // both are different

// console.log(id===anotherId)  // false

// let bigNumber = 12345678890987621n

// No Primitive (Reference type)  // directly memory ka reference allocate kia jata h 

// Array, Objects, Functions

// example 

let names = ['umair','noman','asad']

let studentInformation = {
 name:"Umair",
 age:21,
 skill:"Frontend Developer",
 isLoggenIn: true
}

let myFun = function(){
console.log("Hello World")
}

console.log(myFun())






// js is dynamically typed language 


