"use strict";
//! Typescript de degisken yazarken onun tipini belirtmeye gerek yok. Typescript bu islemi otomatik olarak yapiyor.
let myname = "kadir";
//? myname = 25
//! Eger üstte string olan myname'i burada tekrardan number olarak tanimlamak istersek Typescript bize hata döndürüyor.
const ferhat = "yes";
//! Burada ferhat'in Type'ni const ile kesin olarak belirledik ve daha sonra ferhat = "24" veya = "Ali" dahi yapamayiz.
////////////////////////////////////////////////?
let benim_adim = "asdasd";
//! :, iki nokta üst üste degiskenlerde Type tanimlamadir.
//! | yada demektir.
benim_adim = "ferhat";
benim_adim = 24;
function change() {
    benim_adim = "asd";
    benim_adim = 74;
}
function check() {
    if (typeof benim_adim === "string") {
        benim_adim.toUpperCase;
    }
    if (typeof benim_adim === "number") {
        benim_adim.toPrecision;
    }
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!
let a = true;
a = false;
a = !a;
a = !!a;
//????????????????????????????
const c = undefined;
let b = 25;
function kontrol() {
    if (b instanceof String) {
        b.toUpperCase;
    }
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let d = "asdads";
let e = 24;
let f = true;
let g = undefined;
//////////////////////////////?
const Person = {
    isim: "Ferhat",
    yas: 24,
    sehir: "Dortmund",
    bilmem: "bilmem",
};
//! Person.isim = 23, üst tarafta string olarak tanimlandigi icin burada isim'i number olarak tanimlamaya izin vermiyor.
//? Yukarida person icerisinde bilmem: "bilmem" olarak tanimlandigindan dolayi alt tarafta bilmem'i sadece bilmem olarak yazabiliriz. Ama yanina | isareti konulursa farkli sekillerde de tanimlana bilir.
let deger = 5;
let isimler = "Ferhat";
console.log(isimler);
deger = 5; //! Burada deger sadece 5  25  45 olabilir.
isimler = "Ahmet";
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//? DIZI TYPELARI TANIMLAMA ?//
let örnek = 5;
const soncay = örnek; //! Burada as sayesinde soncay'in number oldugunu söylemis olduk.
const dizi = []; //! Type'i anydir. Dizinin icinde herhangi birsey tanimlanmamistir. Icerisin de hersey tanimlanabilir.
const dizi2 = []; //? Bu sekilde any olani string dizisi olarak tanimlayabiliriz.
const dizi3 = []; //? Bu sekilde de Type'i any olan bir degeri number'a cevirebiliriz.
const dizi4 = [];
const dizi5 = ['asda', 12, true, false]; //! Ama burada Symbol Type'i eklenemez. Eger number, boolean, string'den sonra Symbol yazarsak false'den sonrada Symbol ekleyebiliriz. 
const dizi6 = []; //! Bu sekilde de type tanimlamasi yapilabilir.
const myDizi = ["ferhat", "Dursun", 12];
myDizi[1].toUpperCase;
