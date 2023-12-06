// Topic : Introduction To DOM
// console.log(window)


// console.log(window.document)

// console.log(document)

// _____X_______X_______

// class 2 of DOM 

// Topic: All Dom Selectors NodeList and HTMLCollection

// geting html element from id 
// getting attribute 
const target = document.getElementById("title")
// console.log(target) // return   <h1 id="title" class="heading">DOM learning from Youtube</h1>
// console.log(target.id) // title
// console.log(target.className) // heading
// console.log(target.getAttribute("id")) // title
// console.log(target.getAttribute("class")) // heading
// console.log(target.setAttribute("class","heading test"))  // overwrite kr de ga agr hum ne phele class lagi ho or os pr ek class or laga di to solution ye h ke do class deni ho gi space de kr

// now applied styling

// console.log(target.style.color = "red")
// console.log(target.style.backgroundColor = "gray")
// console.log(target.style.padding = "10px")
// console.log(target.style.borderRadius = "20px")
// console.log(target.style.textAlign = "center")
// console.log(target.style.color = "#212155")


// getting content
// console.log(target.innerHTML) // DOM learning from Youtube . ye sub kuch show kare ga tags bhi attribute bhi or styleing bhi . or jo text hide kia howa h wo ni mile ga. inshort all html tags support
// console.log(target.textContent) // DOM learning from Youtube. jab os pr css ki property lagi ho gi display none ki wo wo text show kre ga phir bhi main difference yahi h  
// console.log(target.innerText) // DOM learning from Youtube jab os pr css ki property lagi ho gi display none ki wo wo text show ni kre ga 

// example of innerText and textContent


// console.log(target.innerText)  // DOM learning from Youtube

// console.log(target.textContent) //  DOM learning from Youtube text test

// console.log(target.innerHTML)


// __________X_______X______


// getting element by querySelector

// const targer2 = document.querySelector("h2")
// const targer2 = document.querySelector("#title")
// const targer2 = document.querySelector(".heading")
// const targer2 = document.querySelector("input")
// const targer2 = document.querySelector("input[type= 'number']")
// const targer2 = document.querySelector("input[type= 'email']")


// console.log(targer2)


// let ul = document.querySelector("ul")
// let li = document.querySelector("li")
// li.style.color = "red "
// li.innerHTML = "Umair Abbasi"


// _______X_______X_________

// getiing  element by queraySelectorAll

// const target3 = document.querySelectorAll('h2')
// target3.forEach((item)=>{
// item.style.color = "blue"
// })


// console.log(target3) // return nodeList which is similar to array but not exist array

const myList = document.querySelectorAll("li");
// myList.forEach((item)=>{
// item.style.color = "red"
// item.style.listStyle = "none"
// // item.style.backgroundColor = "yellow"

// })

// myList[2].style.color = "red"


// note 
// qs mai hamin serif first element milta h 
// qsa mai hamin all elemet milte hn pr node list mai or nodelist array se silimir hota h pr exist array ni hota for each looping kr key apni styling kr sakte h . or agr map wagera use krna h to wo hum ose hum array mai convert kr key use kr sakte hn   pr hamin ek specfic elemet ko stylng krno ho to [] ye syntex ise kr key kr sakte hn

// _______X______X_________


// getting elemet by className

const target4 = document.getElementsByClassName("list-item")
// target4[3].style.color = "red"  // return HTMLcollection whcih is different from nodeList 

const converted = Array.from(target4)
converted.forEach((item)=>{
item.style.color = "red"
})
console.log(converted)
// converted[0].style.color = "red"
// console.log(target4)





