console.log("Typescriptsssss");
//! Eger bir degiskenin degerini Program icerisinde degistireceksem let kullaniyorum,
//! degistirmeyeceksem const ile tanimliyorum.
let age: number = 30;
let name2: string = "Ferhat";
let soyisim: string = "Dursun";
console.log(name2);

let isimSoyisim: string = `Benim adim ${name2}, soyadim ${soyisim}`;
console.log(isimSoyisim);

function display(id: any, name: string) {
  console.log("id = " + id + ", Name =" + name);
}

let firstNames: (string | number)[] = ["Ferhat", "Dursun", "Serafettin", 20];

//!!!!!!!!!!!!!
let fruits: Array<string | number>; //! Burada ki Array ile let fruits´in Array oldugunu belirtiyoruz. Ve bu zorunluluk.
fruits = ["Ferhat", "Ankara", 30]; //? bu sekilde tekrardan tanimlayabiliyoruz.

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//!!!!!!!!!!!!!

let ids: Array<number>;
ids = [23, 24, 25, 124];

//!!!!!!!!!!!!!

//? Tuple

let id: number = 1;
let instructorName: string = "Ferhat";

let instructor: [string, number] = ["Serhat", 22]; //! Burada type Tuple. Önemli olan ilk önce string sonra number tanimlamamiz. Cünkü o sekilde yazilmis!! istersek bu sirayi degistirebiliriz!!!

var user: [number, string, boolean, number, string];
user = [2, "Maximillian", true, 2014, "Ütgm"];

console.log(instructor, user);

//! Tuplelardan Array oolusturma!!!

let employee: [number, string][]; //! number ve stringlerden olusan bir Array
employee = [
  [1, "Ferhat"],
  [2, "Serafettin"],
  [3, "Muhammet"],
];
console.log(employee);

type Person = {
  firstname: string;
  lastname: string;
  age: number;
  jobtitle: string;
};

let instrustor: Person;

instrustor = {
  firstname: "Ahmet",
  lastname: "Kaymaz",
  age: 45,
  jobtitle: "Alb",
};

console.log("instrustor:", instrustor);

console.log("instrustor_firstname:", instrustor.firstname);

//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!
//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!
//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!

//? ENUM

enum Media {
  Newspaper,
  Newsletter = 0,
  Magazine,
  Buch,
}
//? Bunlar number enumlar
//! Enumlara istersek böyle deger verebiliriz! Ve siralama otomatik olarak degisiyor.
//?

console.log("Media.Buch =", Media.Buch);
console.log("Media[];", Media[0]);

//? string enumlar

enum PrintMedia {
  Newspaper = "NEWSPAPER",
  Newsletter = "NEWSLETTER",
  Magazine = "MAGAZINE",
  Book = "BOOK",
}

console.log("PrintMedia:", PrintMedia.Magazine);

//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!
//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!
//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!

//? Data_Type_Union

let code: string | number | boolean = "Heybeli";
console.log("code:", code);
code = 21;
console.log("code:", code);

//? Data_Type_Any

let someThing: any = "Hello World";
someThing = 30;
someThing = true;

someThing = {
  //! Bu sekilde farkli typelardan degerler ile object de olusturabiliriz!!!
  firstName: "Can",
  lastName: 2,
};
console.log(someThing); //! Burada someThing´in type´i any oldugu icin sonrasinda da her typedan deger verebiliriz!!!

let arr: any[] = [2, "Ferhat", true];
console.log(arr);

//? Data_Type_Void

//! Function geriye deger döndürmüyorsa bunu void ile belirtebiliyoruz!!!
//! Void´e sadece null ve undefined atanabilir. Ama Never´a hicbir type atanamaz!!

function sayHello(): void {
  //! void dedikten sonra return kullanamayiz, cünkü void zaten geriye birsey döndürmüyor demek.
  console.log("Hi");
}

sayHello();

//? Data_Type_Never

function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
//! never sadece geriye hata döndürmek icin kullaniliyor. Baska bir ise yaramiyor!!!
//? throwError("Hata");



let bitki: void = null;
let bitki2: void = undefined;

//! let nothing: never = null  never´a hicbir type atayamiyoruz!!!



//? Data_Type_Inference

//! let sayac´in type´ini number olarak yazmamama ragmen console´de type´ini number olarak görebiliriz!!! Type_Inference olayi budur!

let sayac = 0;

console.log(typeof sayac);


function increment(counter: number) {//! normalde () den sonra function´in type´ini tanimlamamiz gerekiyor ama return de birer birer artiracagindan dolayi Typescript bunu kendisi algiliyor ve direk olarak function´un type´ini belirliyor.
  return counter++;
}


let a = "Fero"

let b = "Sero"

b = a

console.log(b);

//! Beispiel

function sum(a: number, b:number) {//! Burada sum() icinde a ve b´nin type degerini belirtmesek bile typescript bunlari inference özelligi sayesinde algilayabiliyor.
  return a + b;
}

let total: number = sum(10, 20)
console.log("total:", total);


//? Data_Type_Assertion
//! tanimladigimiz bir degiskenin type´ini typescript´in otomatik olarak tanimlamasini istemiyorsak Assertion´u kullaniyoruz!!!

let obj: any = 123;
console.log("typeof obj;", typeof (obj)); //! Burada obj'nin number degeri aldigini görüyoruz!!! Bu number degeri ise type inference özelliginden geldi!!!

let empObj = <number> obj //! let empObj = <number> obj    Typescriptin type inference yapmasini istemiyorsak bu sekilde <number> type belirtmemiz gerekiyor.
console.log(typeof empObj); //! Bu sekilde de number type degerini aliyoruz!!!


let myObject = {}
console.log(typeof myObject);
//? myObject.name = "Ferhat" myObject objesinin icinde name propörty si tanimlanmadigi icin, burada bu sekilde bir atama yapamiyoruz!!! Deswegen bizim stractk yapisini kurmamiz gerekiyor.


//! Ein neues Beispiel

interface IMyPerson{
  name: string,
  vorname: string
}


let myEmployee = <IMyPerson> {}   //! Burada <myPerson> ekledigimiz icin alt satirda name tanimlamasi yaparken myPerson interface'inin typelarini kullaniyoruz!!! Bu interface de ki strakcir yapisi gecerli olmus oldu.
console.log(typeof myEmployee);
myEmployee.name = "Soncay"; //! <IMyPerson> yazidigizdan dolayi burada ki name atamamiz gecerli hale geldi!
console.log("myEmployee:",myEmployee);



//? Data_Type_Casting

const clueless: unknown = "1";
console.log(typeof clueless);

const clueNum: number = <number>clueless; //! Burada clueNum diye yeni bir degisken tanimladik ve clueless´in type´ini number yaptik. Bu islem Castin olarak adlandiriliyor.
console.log(clueNum); //! Bunu yazdirinca 1(type number olarak) aliyoruz


//? 2. yöntem (for Casting) 
const clueNumPreferred = clueless as string //! Bu sekilde de as ile clueless´in type´i number olmus oluyor. consolede bunu da number 1 olarak görebiliriz!
console.log("Yazdir;",typeof clueNumPreferred);
console.log("Yazdir2;", clueNumPreferred);







