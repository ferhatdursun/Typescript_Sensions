"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const silStudent_1 = require("./silStudent");
const Student_1 = require("./Student");
const student = new Student_1.Student("Ferhat", "Dursun", 15);
console.log(student.getStudentInformation());
const sonstudent = new silStudent_1.sonStudent("Ahmet", "Mehmet", 30);
console.log(sonstudent.benimAdim);
