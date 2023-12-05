// Topic Object part 2

// let tinderUser = new Object()
const tinderUser = {};

tinderUser.name = "Umair";
tinderUser.id = "123abc";
tinderUser.isLoggedIn = false;
// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userOneFullName: {
      firstName: "Umair",
      lastName: "Abbasi",
    },
  },
};

// console.log(regularUser)
// console.log(regularUser.fullname.userOneFullName.firstName)

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = {
  6: "e",
  7: "f",
};

// const mergerOb = { obj1, obj2 };
// console.log(mergerOb);  // this is not valid method of joininh two or more object

// const merge = Object.assign(obj1,obj2,obj3)
// const merge = Object.assign({}, obj1, obj2, obj3); // both are same things to joining two or more objects


// console.log(merge);





const mergeUsingSpread = {...obj1,...obj2,...obj3}
// console.log(mergeUsingSpread)


// getting all the keys from an object

console.log(Object.keys(tinderUser))
// getting all the values from an object
console.log(Object.values(tinderUser)) 

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))