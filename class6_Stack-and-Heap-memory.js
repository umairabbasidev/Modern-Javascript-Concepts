// Topic Stack and Heap Memory In Javascript

// There are 2 types of Memory in javascript
// 1) Stack memory used in (All Primitive Data Types [Number,Null,Symbol,String,Boolean,BigInt,Undefined(NN,SS,BB,U)] )

// copy milta h jab bhi hum os declare variable ka access ley gay to

// 2) Heap memory used in (all Non-Primitives Data Types or Reference Type (Array,Object,function))

// hamin original value ka reference milta h direct

// example of stack memory  (primitive )

let myYoutubeName = "umairyoutubedotcom";

let anotherName = myYoutubeName;

anotherName = "abbasiyoutubedotcom";



// console.log(myYoutubeName); // umairyoutubedotcom
// console.log(anotherName);  // abbasiyoutubedotcom



// example of Heap memory  (Non - primitive )

let userOne = {
 email:"user@google.com",
 id :"123"
}

let userTwo = userOne
userTwo.email = "user@youtube.com";
console.log(`UserOne`,userOne);  //  UserOne { email: 'user@youtube.com', id: '123' }
console.log(`UserTwo`,userTwo); // UserTwo { email: 'user@youtube.com', id: '123' }

// Note: dono mai email ki value change ho gay q k ye Non Primitive data type h isi waja se ki memory allocation Heap memory mai hota h or jab hum os non-primitive data type ko access krte hn to haimin os ka original reference milta h jo ja is case mai same the isi waja se hum ne ek ki value chnage ki to wo dosri bhi change ho gai q ke dono ka reference same tha   




// Summary

// Jitne bhi primitive values hn ye sub jate hn stack ke ander . or jab bhi stack se wapis koi cheez le gay to os ka apko ek copy milta h 

// leqin jab ap heap ke ander kuch bhi value jati h to jab hum os se wapis access lete hn to hamin os ka reference milta h means koi bhi change kete hn to wo direct original value mai change hota h 