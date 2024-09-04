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
/*
let div = document.querySelector("div");

let btn = document.createElement("button");
btn.innerText = "click me!";
div.append(btn);*/

let body = document.querySelector("body");
let div  = document.createElement("div");
let btn  = document.createElement("button");
div.innerText = "Welcome";
btn.innerHTML = "Click Me!";
body.append(div);
//div.append(btn);  // add the last of div
//div.prepend(btn); // add the first of div
//div.before(btn);  //before the div tag
div.after(btn);     //after the div tag