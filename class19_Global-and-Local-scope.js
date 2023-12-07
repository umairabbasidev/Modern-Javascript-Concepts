// Topic : Global and Local scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a)
// console.log(b)
// console.log(c);

// __________X________X_______
// nested scope and mini level hoisting


function one(){
 const userName = "Umair";

 function two() {
  const website = "Youtube"
  console.log(userName)
 }
 // console.log(website);

 two() 
}

one() //  website is not defined



if (true) {
 const username = "Umair"
 if (true) {
  const website = "Youtube"
  console.log(username)
 }

 // console.log(website) // website is not defined

}


addOne(5) // accesable and ans is 6

function addOne(num){
return console.log(num+1)
}

addTwo(8) //not accessable  Cannot access 'addTwo' before initialization

const addTwo= function(num){
return console.log(num+2)
}
