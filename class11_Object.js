// Topic : Object in js

// singleton when object make using constructor is called  singleton means ye apne tarah ka ek hi object h
// eg
// object.create()

// object literals

let mySymbol = Symbol("symbol1");

let userOne = {
  name: "umair",
  [mySymbol]: "value",
  full_name: "Umair Abbasi",
  age: 21,
  location: "Pakistan",
  email: "umair@google.com",
  isLoggedIn: false,
  lastLogggedInDays: ["Monday", "Saturday"],
};

// console.log(userOne);
// console.log(typeof userOne[mySymbol]);
// console.log();
// console.log(userOne.name);
// console.log(userOne.email);
// console.log(userOne["isLoggedIn"]);
// console.log(userOne.lastLogggedInDays[1]);

// Object.freeze(userOne)

// userOne.name = "Uzair Abbasi"
// console.log(userOne)

userOne.greeting = function () {
  console.log("Hello js user");
};

userOne.greetingByName = function () {
  console.log(`Hello js ${this.full_name} `);
};

// console.log(userOne.greeting())
// console.log(userOne.full_name())
console.log(userOne.greetingByName());
console.log(userOne);
