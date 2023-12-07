// Topic : function with objects and array

// rest operator in functionn use case

function calculateCartPrice(num1) {
  return num1;
}

// console.log(calculateCartPrice(100,200,300)) // 100 not give the other value

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(100,200,300,500)) // return all values which we are providing the function argument and return in array form

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(100,200,300,500,1000)) //  [300, 500, 1000]

const user = {
  username: "umair",
  price: 199,
};

function handleObect(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// handleObect(user)

// handleObect({username:"uzair",price:199})

// array passing in function

const myArr = [100,200,300,400,500];

function returnSecondvalue(anyArray){
 return anyArray[1]
}

console.log(returnSecondvalue(myArr))



console.log(returnSecondvalue([100,200,300,400,500]))