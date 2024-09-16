//Timeout Function // Asyncronous 
/*
function hello(){
    console.log("Hello World");
}

setTimeout(hello,2000);

//using arrow function
console.log("checking time");

setTimeout(()=>{
    console.log("hello World");
},4000);
*/ 
function getData(dataId, nextdata){
    for(let i=0;i<10;i++){
        console.log(".");
    }
    setTimeout(()=>{
        console.log("Loadead");
        console.log("data = ",dataId);
        if(nextdata){
            nextdata();
        }
    },4000);
}
getData(1,()=>{
    console.log("loading data 2");
    getData(2);
});