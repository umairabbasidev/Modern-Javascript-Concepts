// Topic:Object de structure and json api


const course = {
courseName:"js in hindhi",
price:"999",
courseInstructure:"Hitesh"
}

// console.log(course)
// console.log(course.courseInstructure)
// console.log(course['courseName'])

// object de structure syntex

// const {courseInstructure} = course
// console.log(courseIntructure)
// if i need to short the key 
const {courseInstructure:instrc,courseName:name} = course

console.log(instrc)
console.log(name)