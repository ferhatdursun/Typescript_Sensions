import { Student } from "./ögrenciler";
// import { Student } from "./Student";
//import {Araba} from "./Student";


const student = new Student("Ferhat", "Dursun", 4); //! Burada ki parantezler aslinda Student.ts de ki constructor() a aittir.
// student.yazdir()
console.log(student.getStudentInformation());

student.isim //! Burada Student.ts sayfasinda ki Student classìnin icerisine ulasabiliyorum. Cünkü const student i Student.ts den import ettim.
//? student.nachname bu sekilde Students.ts icinde ki Student classina ulasamiyorum. nachname private oldugu icin.
//? Eger Studen.ts sayfasinda ki nachnamenin basinda private yaziyosa bu durum bu sayfada ki student.nachnameden önce // @ts-ignore yazilarak asilabilir.

// @ts-ignore
//!Burada ki @ts-ignore sayesinde Student.ts de nachname private olarak tanimlanmis olsa da ulasilabiliniyor. Ama 
console.log(student.nachname);

// @ts-ignore
console.log(student.memleket);


// const araba = new Araba(marka: string, rengi: string);
// console.log(araba.marka);
// console.log(araba.rengi);


// araba.marka

// araba.rengi