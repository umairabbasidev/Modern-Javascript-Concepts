// Topic : Array part 2

let studentsOne = ['umair','uzair','asad'];
let studentsTwo = ['Noman','hamid','tayyab'];
// let merge = studentsOne.push(studentsTwo)

// let merge2 = studentsOne.concat(studentsTwo)  // this is correct for joining two or more arrays

let merge3 = [...studentsOne,...studentsTwo]

// console.log(studentsTwo)
// console.log(merge)
// console.log(merge2)
console.log(merge3) // this is correct for joining two or more arrays




let rereSituation = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
let newArr = rereSituation.flat(Infinity) 
console.log(newArr)// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// console.log(Array.isArray("Umair"));
// console.log(Array.from("Umair"));



console.log(Array.from({name:"umair"})) // [] 

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3)) //  [100, 200, 300]