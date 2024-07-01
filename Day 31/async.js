//async keyword
//create an async function

async function greet() {
    return "hello world"; //return a promise
}
let hello = async() = {}; //return a promise

//or
async function greet() {
    throw "some randowm error";
    return "hello"; // return a promise
}

greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result was:", result);
    })
    .catch((err) => {
    console.log("promise was rejected with err:", err);
});

//await keyword:pauses the execution of its surrounding async function until the promise is settles (resolved or rejected)
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            resolve(num);
        }, 1000);
    });
}

//now you can call the getNum() function
getNum()
  .then((num) => {
    console.log("Random number:", num);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

