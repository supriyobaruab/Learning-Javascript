/*let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) =>{
    console.log("Clicked");
    console.log(evt.clientX, evt.clientY);

}
let btn2 = document.querySelector("#btn2");
btn2.ondblclick =() =>{
    console.log("clicked twice");
}
let box = document.querySelector(".box")
box.onmouseover = () =>{
    console.log("You are on the div file");
}
// Event listener
btn1.addEventListener("click", ()=> {
console.log("button clicked",);
});
*/
let btn1 = document.querySelector(".btn1");
let body = document.querySelector("body");
let curnMode = "light";
btn1.addEventListener("click", () => {
 if(curnMode === "light"){
    curnMode ="dark"
    body.style.backgroundColor = "#161618";
    //console.log("dark");
    btn1.classList.add("btn2");
    btn1.classList.remove("btn1");
    btn1.innerText = "light"
 }
else{
    curnMode = "light";
    body.style.backgroundColor = "white";
    //console.log("light");
    btn1.classList.remove("btn2");
    btn1.classList.add("btn1")
    btn1.innerText = "dark"
}
console.log(curnMode);
});