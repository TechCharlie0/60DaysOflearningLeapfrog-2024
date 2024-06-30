//js is single threaded
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a + b);
//or
setTimeout(() => {
  console.log("isha kandel");
}, 2000);
setTimeout(() => {
  console.log("Robert pattinson");
}, 2000);
console.log("hello..");

//callback hell
h1 = document.querySelector("h1");
function changecolor(color, delay, nextcolorchange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextcolorchange) nextcolorchange();
  }, delay);
}

changecolor("red", 1000, () => {
  changecolor("orange", 1000, () => {
    changecolor("blue", 1000, () => {
      changecolor("yellow", 1000, () => {
        changecolor("purple", 1000);
      });
    });
  });
});

//or

function saveToDatabase(data, sucess, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    sucess();
  } else {
    failure();
  }
}

saveToDatabase(
  "apna college",
  () => {
    console.log("sucess");
    saveToDatabase(
      "hello world",
      () => {
        console.log("sucess2");
        saveToDatabase(
          "isha",
          () => {
            console.log("sucess3");
          },
          () => {
            console.log("failure3");
          }
        );
      },
      () => {
        console.log("fail2 ");
      }
    );
  },
  () => {
    console.log("failure");
  }
);
