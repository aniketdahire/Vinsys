// let student = {
//     name : 'Aniket',
//     rollNo : 35,
//     div : 'A',
//     branch : 'Computer',
//     gender : 'Male',


//     marks : {
//         science : 98,
//         math : 100,
//         marathi : 78,
//         sanskrit :79,
//         Hindi : 89,

//         displaystudentMarks :()=>{ // we can't use the this in arrow functin because it not bound it with 
//                 console.log(`Marks of Science ${student.marks.science}`);
//                 console.log(`Marks of Hindi ${student.marks.Hindi}`);
//                 console.log(`Marks of Marathi ${student.marks.marathi}`);
                
//         }

//     },

//     displaystudData: () => {
//         console.log(`Name : ${student.name}, Rollno:${student.rollNo}`);
//     }
// }

// student.marks.displaystudentMarks();
// console.log("Name: ",student.name);
// console.log("RollNo: ",student.rollNo);
// console.log("Division: ",student.div);
// console.log("Branch: ",student.branch);
// console.log("Gender: ",student.gender);

// student.displaystudData();

// student.email='aniketdahire476@gmail.com';
// console.log("The email of student object( define in outer the object): ",student.email);

// delete student.email; // to remove the property of object 

// console.log(student);


//using the normal funtion 

let stud = {
    name : 'Vedant',
    rollno : 12,

    displaydata: function(){ // in this we use the this to point the object value to print 
        console.log("Name :",this.name);
    }
}

stud.displaydata();


let student = {
    name : 'Aniket',
    rollNo : 35,
    div : 'A',
    branch : 'Computer',
    gender : 'Male',

    marks : {
        science : 98,
        math : 100,
        marathi : 78,
        sanskrit : 79,
        Hindi : 89,

        displaystudentMarks : function (){
            console.log(`Marks of Science: ${this.science}`);
            console.log(`Marks of Math: ${this.math}`);
            console.log(`Marks of Marathi: ${this.marathi}`);
            console.log(`Marks of Sanskrit: ${this.sanskrit}`);
            console.log(`Marks of Hindi: ${this.Hindi}`);
        }
    },

    displaystudData: function() {
        console.log(`Name: ${this.name}, Roll No: ${this.rollNo}`);
    }
}

// Correct calling
student.marks.displaystudentMarks();

console.log("Name: ", student.name);
console.log("RollNo: ", student.rollNo);
console.log("Division: ", student.div);
console.log("Branch: ", student.branch);
console.log("Gender: ", student.gender);

student.displaystudData();
