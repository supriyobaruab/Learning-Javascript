/*let div = document.querySelector("#box");
console.log(div);
let id = div.getAttribute("id");
console.log(id);
div.setAttribute("id","newid");
console.log(id);

let div = document.querySelector("#box");

div.style.backgroundColor = prompt("print the colour");
div.style.borderColor = prompt("print the border");
*/
let newdiv =document.createElement("div");
let newbtn =document.createElement("button");
console.dir(newbtn);
newbtn.setAttribute("id","btn");
let div = document.querySelector("div");
div.append(newdiv);
newdiv.append(newbtn);
newbtn.innerText = "Click me!";
