function asyncFunc() {
  // api
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("Success");
    }, 4000);
  });
}
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("error");
      reject("error");
    }, 4000);
  });
}

/*let res = asyncFunc(); //for us
res.then((res) => {
  console.log("Success");
  let res1 = asyncFunc1();
  res1.then((res) => {
    console.log("Success");
  });
});
console.log(res);
*/
console.log("fetching data 1....");
asyncFunc().then((res) => {
  console.log(res);
  console.log("fetching data 2....");
  asyncFunc1().catch((err) => {
    console.log("network", err);
  });
});
