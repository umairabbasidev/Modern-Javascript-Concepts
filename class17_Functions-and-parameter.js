// Topic : functions and parameter
function sayMyName() {
  console.log("U");
  console.log("M");
  console.log("A");
  console.log("I");
  console.log("R");
}
// sayMyName()

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

// const result = addTwoNumbers(5,5) // 10
// console.log("Result: ",result) // undefined . b/c hum ne function se kuch return nahi kia just console kia h

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);

  return number1 + number2;
}

//  const result = ( addTwoNumbers(5,5)) // 10
// console.log("Result: ",result) // 10

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}

// const result = addTwoNumbers(5,5)

// console.log("Result: ",result) // 10

// another approach

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(5, 5);

// console.log("resul: ", result);

// note hamin return krna ho ga agr hum bahir ose kise variable mai store krna chate hn other wise hamin undefined mila ga

function loginUserMessage(username) {
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Umair Abbasi"))
// console.log(loginUserMessage("Uzair Abbasi"))

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage());

function loginUserMessage(username) {
  if (!username) {
    // same as above
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage());

function loginUserMessage(username = "Umair") {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage()); // if we not provided not value so it can use by use above value which is Umair. and if we provied any value so it can replace from new value\

console.log(loginUserMessage("Uzair khan"));
