// Async- Await // simpolize the code better then callback hell and promises chain

function getData(getId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Data",getId);
        resolve("Success");
        },4000)
    })
}

async function getWeatherdata() {
    console.log("Getting data 1......");
    await getData(1);
    console.log("Getting data 2......");
    await getData(2);
    console.log("Getting data 3......");
    await getData(3);
    console.log("Getting data 4......");
    await getData(4);
    console.log("Getting data 5......");
    await getData(5);
    console.log("All the data imported")
}
getWeatherdata();