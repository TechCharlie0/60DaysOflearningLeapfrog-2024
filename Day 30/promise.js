//promises: the promise object reperesent the eventual completion of an asynchronous operation and its resulting value
//resolve and reject(sucess & failure)
//asynchronous data

function saveToDatabase(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("sucess");
    } else {
      reject("failure");
    }
  });
}
