// Topic :Array in js

let myArr = ['umair',0,1,2,3,4,5,true,'umair'];

// console.log(myArr[0])

// let newArr = new Array(1,2,3,4,5)
// console.log(newArr[2])

// Array Methods

// let a = myArr.push('abbasi');
// console.log(a)  // 10 return  the new length of the array 
// console.log(myArr)

// let b = myArr.pop()
// console.log(b) // return the remove element of the array
// console.log(myArr)

// let c = myArr.unshift("Hello","World")
// console.log(c) // 11 return  the new length of the array 
// console.log(myArr)


// let d = myArr.shift()
// console.log(d); // return the remove element of the array
// console.log(myArr)


// console.log(myArr.includes('umair')) // true
// console.log(myArr.indexOf(5)) // 6



let arr1 = [1,2,3,4,5]

// let arr2 = arr1.join()
// console.log(arr1)
// console.log(typeof arr2) // convert ito string



let myNA1 = arr1.slice(1,3);
console.log("OriginalArray",arr1)
console.log("B",myNA1)


let myNA2 = arr1.splice(1,3)
console.log("OriginalArray",arr1)
console.log("D",myNA2)

// main difference slice or splice mai ye h ke slice mai last value included nahi hoti or splice mai last value include hoti h leqin wo original array ko bhi change kr deta h or slice nahi krta