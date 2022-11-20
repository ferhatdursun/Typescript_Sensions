function add(a, b) {
    //! Burada functiondan sonra yazdigimiz ():number su demek; bu fonksiyon geriye number döndürsün. Buraya number yazmasak bile, Typescript bunu Typeinference yardimi ile tahmin ediyor.
    return a + b;
}
var toplam = add(10, 30);
console.log("toplam;", toplam);
console.log("typeof toplam;", typeof toplam);
function bastir() {
    console.log("Can Boz");
    //! Eger burada return kullanirsak, return'ün mutlakada  degeri döndürmesi gerekiyor. Yani function´í hangi type olarak tanimlarsak return o type'da bir deger geriye döndürmesi gerekiyor!!!
    return 12;
}
bastir();
//! Beispiel
function birlestir(ad, soyad) {
    return ad + "/" + soyad;
}
var degisken = birlestir("Ferhat", "Dursun");
console.log(degisken);
//! Beispiel Default_Parameters
function defaultParameters(ad, soyad) {
    if (soyad === void 0) { soyad = "Kaymaz"; }
    return ad + "?" + soyad;
}
var myDefaultParameters = defaultParameters("Ahmet");
console.log(myDefaultParameters);
//! Optional Parameters
//? Olursa olur, olmazsa islem yapmam anlaminda!!
function carpma(a, b, c) {
    console.log("typeof c;", typeof (c));
    if (typeof c === "number") {
        return a * b * c;
    }
    return a * b;
}
var sonucCarpma = carpma(2, 3, 5); //! Burada 5 yerine baska bir type yazarsak return a*b kismi calisacak!!! Ve burada c icin herhangi bir deger göndermezsek c'nin type'i undefined oluyor.
console.log("sonucCarpma;", sonucCarpma);
//? Arrow Function Kullanimi
function arrowCarpim(ac, ab) {
    return ac * ab;
}
//! bu function'u arrow function halinde yazicaz!!
var arrowCarpim2 = function (a, b) {
    return a * b;
    //! bu sekilde kisaltabiliriz!!
    //! let arrowCarpim2 = (a: number, b:number): number => a * b;
};
var myArrowCarpim2 = arrowCarpim2(4, 2);
console.log("myArrowCarpim2;", myArrowCarpim2);
//!!
var Print = function () {
    console.log("Print");
};
Print();
var Yazdir = console.log("Yazdir"); //! Bu üstte ki let Print'in kisa yazim tarzi!!!
