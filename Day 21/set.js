//Set Timeout
//setTimeout (function , timeout)
console.log("hi everyone!");
setTimeout(() => {
  console.log("isha kandel");
}, 4000);
console.log("hi i am ");

//setInterval
//setInterval(function, timeout)
setInterval(() => {
  console.log("Robert pattinson");
}, 2000);

//this with arrow function
//function:scope=>this =>calling object
//arrow =>lexical scope => parent ko scope lai =>call

const student = {
  name: "aman",
  marks: 95,
  prop: this, //global scope
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this); // parent scope i.e window
    return this.name;
  },
  getInfo1:function () {
    setTimeout{() =>{
    console.log(this); // student


}, 2000};
  };
  getInfo2 : function(){
    setTimeout{function(){
      console.log(this); //window
    }, 2000};
  },
}; 
