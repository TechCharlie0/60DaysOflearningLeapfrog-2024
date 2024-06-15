//trim method
let msg = "  hello   ";
console.log(msg.trim());

let password = prompt("enter you new password");
console.log(password.trim());

//in js string are immutable that means a new string is created and old one remains same

//to string into toUppercase and toLowercase
let str = "ishakandel";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//string methods with argument
console.log(str.indexOf("kandel")); //1(found)
console.log(str.indexOf("j")); //-1(not found)
