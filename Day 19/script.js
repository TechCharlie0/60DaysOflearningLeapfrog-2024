//js obje t literals
//use to store keyed collection and complex entities
 let student = {
    name: "isha";
    age: 21;
    marks:94.4;
    city:"narayangadh";
 };

 //get values
 let student= {
    name: "robert";
    marks:99.9;
};
student["name"];
student.name;    //robert

//add/update value
 const stud = {
    name: "robert";
    age: 21;
    marks:94.4;
    city:"narayangadh";
};
 stud.city= "mumbai"; //update value
 stud.gender="male";  //add value

 //object of objects
 //storing information of multiple students
 const classInfo= {
    aman:{
        grade: "A+";
        city: "chitwan";
    },
    isha:{
        grade: "A+";
        city:"Gaindakot";

    },
    Robet:{
        grade:"A";
        city:"Gaindakot";
        }
 };
