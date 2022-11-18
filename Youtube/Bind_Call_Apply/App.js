//! CALL

function myFunction(name, surname) {
  this.name = name;
  this.surname = surname;
  console.log(this);
}
//! Ama bu üstte ki myFunction´i arrow olarak yazarsak this kullanamayiz. this ile sadece window´u cagirabiliriz.
//! function ile arrow Function arasinda ki farklardan bir tanesi!

new myFunction().name;

const myThis = {
  description: "this is this",
};

myFunction.call(myThis);
//! call ile; myfunction´i burada call ile cagiriyoruz, yukarida myFunction icerisinde console.log var
//! ve myFunction.call() icinde ki myThis yazdiriliyor. Yani "this is this"

//? APPLY

myFunction.apply(myThis, ["Ahmet", "Cakar"]);
//! apply; aslinda call ile ayni mantik. Farki ise 2 parametre (myThis, ["Ahmet", "Cakar"]) alir ve 2. parametrede cagrilacak fonksiyonun parametrelerini olusturur.

//? BIND

const bindedFunction = myFunction.bind(myThis, "Sergen");
//!bind de istersek bu sekilde istersek "Sergen", "Yalcin" yazabiliriz, istersek Yalcin´i altta ki bindedFunction() icinde tanimlayabiliriz.

bindedFunction("Yalcin");

//! Arrow Function dan dizi olmaz!!!! ve Arrow Function manüpile edilemez!! icine ne yazarsak onu yazidirir.
//! Classlarda normal function kullaniriz!!!





class Ferhat {
  constructor() {
    this.name = "ferhat";
    window.addEventListener("click", this.doThis.bind(this));
  }
  doThis() {
    console.log(this);
  }
}
new Ferhat();
