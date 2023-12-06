// Topic Create new element in Dom

// const div = document.createElement("div")
// div.className = "main"
// div.id = Math.round(Math.random() * 10 + 1);
// div.setAttribute("title","my-title");
// div.style.color = "red"
// // div.innerText = "Umair Abbasi"

// const addText = document.createTextNode("Umair Abbasi")
// div.appendChild(addText)
// document.body.appendChild(div)
// console.log(div)



const h1 = document.createElement("h1")
h1.className = "my-heading"
h1.id = "my-id"
h1.setAttribute("title","my-title")
// h1.innerHTML = "Hello World"
// h1.innerText = "Hello World"
const addText = document.createTextNode("Hello World")
h1.appendChild(addText)
h1.style.color = "blue"
document.body.appendChild(h1)


console.log(h1)