console.log("Typescriptsssss");
//! Eger bir degiskenin degerini Program icerisinde degistireceksem let kullaniyorum,
//! degistirmeyeceksem const ile tanimliyorum.
var age = 30;
var name2 = "Ferhat";
var soyisim = "Dursun";
console.log(name2);
var isimSoyisim = "Benim adim ".concat(name2, ", soyadim ").concat(soyisim);
console.log(isimSoyisim);
function display(id, name) {
    console.log("id = " + id + ", Name =" + name);
}
var firstNames = ["Ferhat", "Dursun", "Serafettin", 20];
//!!!!!!!!!!!!!
var fruits; //! Burada ki Array ile let fruits´in Array oldugunu belirtiyoruz. Ve bu zorunluluk.
fruits = ["Ferhat", "Ankara", 30]; //? bu sekilde tekrardan tanimlayabiliyoruz.
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//!!!!!!!!!!!!!
var ids;
ids = [23, 24, 25, 124];
//!!!!!!!!!!!!!
//? Tuple
var id = 1;
var instructorName = "Ferhat";
var instructor = ["Serhat", 22]; //! Burada type Tuple. Önemli olan ilk önce string sonra number tanimlamamiz. Cünkü o sekilde yazilmis!! istersek bu sirayi degistirebiliriz!!!
var user;
user = [2, "Maximillian", true, 2014, "Ütgm"];
console.log(instructor, user);
//! Tuplelardan Array oolusturma!!!
var employee; //! number ve stringlerden olusan bir Array
employee = [
    [1, "Ferhat"],
    [2, "Serafettin"],
    [3, "Muhammet"],
];
console.log(employee);
var instrustor;
instrustor = {
    firstname: "Ahmet",
    lastname: "Kaymaz",
    age: 45,
    jobtitle: "Alb"
};
console.log("instrustor:", instrustor);
console.log("instrustor_firstname:", instrustor.firstname);
//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!
//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!
//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!
//? ENUM
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 0] = "Newspaper";
    Media[Media["Newsletter"] = 0] = "Newsletter";
    Media[Media["Magazine"] = 1] = "Magazine";
    Media[Media["Buch"] = 2] = "Buch";
})(Media || (Media = {}));
//? Bunlar number enumlar
//! Enumlara istersek böyle deger verebiliriz! Ve siralama otomatik olarak degisiyor.
//?
console.log("Media.Buch =", Media.Buch);
console.log("Media[];", Media[0]);
//? string enumlar
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log("PrintMedia:", PrintMedia.Magazine);
//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!
//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!
//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!//!!!!!!!!!!!!!
//? Data_Type_Union
var code = "Heybeli";
console.log("code:", code);
code = 21;
console.log("code:", code);
//? Data_Type_Any
var someThing = "Hello World";
someThing = 30;
someThing = true;
someThing = {
    //! Bu sekilde farkli typelardan degerler ile object de olusturabiliriz!!!
    firstName: "Can",
    lastName: 2
};
console.log(someThing); //! Burada someThing´in type´i any oldugu icin sonrasinda da her typedan deger verebiliriz!!!
var arr = [2, "Ferhat", true];
console.log(arr);
//? Data_Type_Void
//! Function geriye deger döndürmüyorsa bunu void ile belirtebiliyoruz!!!
//! Void´e sadece null ve undefined atanabilir. Ama Never´a hicbir type atanamaz!!
function sayHello() {
    //! void dedikten sonra return kullanamayiz, cünkü void zaten geriye birsey döndürmüyor demek.
    console.log("Hi");
}
sayHello();
//? Data_Type_Never
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
//! never sadece geriye hata döndürmek icin kullaniliyor. Baska bir ise yaramiyor!!!
//? throwError("Hata");
var bitki = null;
var bitki2 = undefined;
//! let nothing: never = null  never´a hicbir type atayamiyoruz!!!
//? Data_Type_Inference
//! let sayac´in type´ini number olarak yazmamama ragmen console´de type´ini number olarak görebiliriz!!! Type_Inference olayi budur!
var sayac = 0;
console.log(typeof sayac);
function increment(counter) {
    return counter++;
}
var a = "Fero";
var b = "Sero";
b = a;
console.log(b);
//! Beispiel
function sum(a, b) {
    return a + b;
}
var total = sum(10, 20);
console.log("total:", total);
//? Data_Type_Assertion
//! tanimladigimiz bir degiskenin type´ini typescript´in otomatik olarak tanimlamasini istemiyorsak Assertion´u kullaniyoruz!!!
var obj = 123;
console.log("typeof obj;", typeof (obj)); //! Burada obj'nin number degeri aldigini görüyoruz!!! Bu number degeri ise type inference özelliginden geldi!!!
var empObj = obj; //! let empObj = <number> obj    Typescriptin type inference yapmasini istemiyorsak bu sekilde <number> type belirtmemiz gerekiyor.
console.log(typeof empObj); //! Bu sekilde de number type degerini aliyoruz!!!
var myObject = {};
console.log(typeof myObject);
var myEmployee = {}; //! Burada <myPerson> ekledigimiz icin alt satirda name tanimlamasi yaparken myPerson interface'inin typelarini kullaniyoruz!!! Bu interface de ki strakcir yapisi gecerli olmus oldu.
console.log(typeof myEmployee);
myEmployee.name = "Can";
