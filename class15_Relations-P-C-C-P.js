// Topic : creating new element in Dom


// accessing the parent then goes to child  
const parent = document.querySelector(".parent") //
// console.log(parent)
// console.log(parent.children) // HTMLCollection HTMLCollection(4) [div.day, div.day, div.day, div.day]
// console.log(parent.children[0].innerHTML)// Monday

for (let i = 0; i < parent.children.length; i++) {

 // console.log(parent.children[i].innerHTML)
 parent.children[i].style.color = "blue"
}


// console.log(parent.firstElementChild.innerHTML) // Monday
// console.log(parent.lastElementChild.innerHTML) // Thursday



// accessing child then goes to parent

// const child = document.querySelector(".day")
// console.log(child)
// console.log(child.parentElement) // target the parent
// console.log(child.nextElementSibling)// targer the next siblings in this case tuesday is print


// concept of nodes 

console.log("NODES: ",parent.childNodes)   // NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]  