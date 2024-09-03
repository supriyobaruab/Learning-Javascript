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
let arr = [1,2,3,4,5];

arr.forEach((val) => {
    console.log("before squaring the value",val);
    val = val*val;
    console.log("after  squaring the value",val);
})