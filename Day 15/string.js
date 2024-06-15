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

//method chaining
let string = "hello";
console.log(string.trim().toUpperCase());

//slice method
let slic = "ilovecoding";
console.log(slic.slice(5)); //coding
console.log(slic.slice(1, 4)); //love
console.log(slic.slice(-1)); //g

//replace
console.log(slic.replace("love", "like")); //ilikecoding
console.log(slic.replace("l", "m")); //impvecoding
