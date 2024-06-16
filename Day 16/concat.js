//concat: merge 2 arrays
let primary = ["red", "blue", "green", "purple", "pink"];
let secondary = ["orangr", "green", "voilet", "mango", "noilen", "black"];
console.log(primary.concat(secondary));

//reverse:reverse an array
console.log(primary.reverse());

//slice:copies a portion of an array
console.log(primary.slice(2, 3)); //ending index 3-1 so its 2 its mean only green so purple is not include because its ending is goes to 3-1=2
console.log(primary.slice(-2));

//splice:removes/replace/add element in place
//splice(start,deletioncount, item0...item(n))
console.log(secondary.splice(4));
console.log(secondary.splice(0, 1));

//sorting;sort an array
let num = [23, 34, 56, 77];
console.log(num.sort());


//nested array:array of array
lets nums = [[2,4], [4,5],[6,7]];

