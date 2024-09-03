//Function Defination
function myFunction(){
    console.log("Hello");
}
myFunction();

const arrowSum = (a,b) =>{
    console.log(a*b);
}

//forEach loop in Arrays // It is a method 
let goro = [1,2,3,4,5];

goro.forEach(function printval(val){
    //console.log(val);
    
})
goro.forEach((val ,idx,goro)=> {
    //console.log(val,idx,goro);
})
//array methods 
/*
*map methods // same as forEach just create a new array;
*/
//filter methods
let newArr = [1,2,3,4,5,6];

new = newArr.filter((val) => {
    return val % 2  ===0;
});
console.log(new);

