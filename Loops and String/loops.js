// for loops

/*let i;

for (i=1;i<=5;i++) {
    console.log("Apna College");
}*/
let sum=0;
for (let i=0;i<=5;i++){
    sum=sum+i;
    console.log("Sum of "+i+" is "+sum);
}

//while loop
let i=1;
while (i<=5) {
    console.log("Apna College");
    i++;
}
// for-of loops
let str ="Hello World";
let size =0;
for (let i of str){
    console.log(i)
    size++;
}
console.log("size =",size);
// for in loop 

let student={
    name: "Supriyo",
    age :   20,
    cgpa:   7.5
};
for (let i in student){
    console.log(i,":",student[i]);
}