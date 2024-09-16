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
/*function getData(dataId, nextdata) {
  console.log("Loading");
  setTimeout(() => {
    console.log("data = ", dataId);
    if (nextdata) {
      nextdata();
    }
  }, 4000);
}
getData(1, () => {
  console.log("loading data 2");
  getData(2, () => {
    console.log("loading data 3");
    getData(3);
  });
});*/

//promieses
/*
let promise = new Promise((resolve, reject) => {
  console.log("I am a promise");
  resolve("Success");
});*/
/*
function getData(dataid, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataid);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}*/

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("Network error");
  });
};
let promise = getPromise();
promise.then(() => {
  console.log("fulfiled");
});

promise.catch((err) => {
  console.log("rejected");
});
