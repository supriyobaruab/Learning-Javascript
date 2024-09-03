/*function countVowels(str){
    let count = 0;
    for(let char of str){
    if (char ==="a" || char ==="e" ||char ==="i" || char ==="o" ||char ==="u"
    ){
        count++;
    }
    }
    return count;
}*/
/*let arr = [1,2,3,4,5];

arr.forEach((val) => {
    console.log("before squaring the value",val);
    val = val*val;
    console.log("after  squaring the value",val);
})
*/
let result = [87,89,54,35,90,91,65,98];
let output = result.filter((val) =>{
    if (val >=90){
        return val
    }
})
console.log(output);
// take input from a user and calculate the sum of the array using the reduce methods
let n = prompt("enter a number");

let arr =[];

for(let i=1;i<=n;i++){
    arr[i-1] = i;
}
let out = arr.reduce((prev,cur) =>{
    return prev+cur;
})
console.log(out);