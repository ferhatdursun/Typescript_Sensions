"use strict";
const Insan = {
    firstName: "Ferhat",
    lastName: "Dursun",
};
const Insan2 = {
    adress: "sasddsa",
    F: Symbol()
};
//! örnegin burada Handyi disarida biraktik.
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//? Fonsiyonun ilk parametresinin type´ini almak icin Parameters kullaniliyor.
function yazdir(asdas) { }
const Sonuc = {
    kutuk: "asdf",
    memleket: "asd"
};
const c = {
    marka: "Audi",
    model: 2022
    //! Burada Partial´dan dolayi secerken marka ve modelin önünde ? cikiyor. Yani bunlarin optionel oldugunu gösteriyor. ? yoksa man muss
    //! Bu optionallik durumunu Car´in altinda ki markanin sagina ? ekleyerekde yapabilirdim.
};
//! REqUIRED da ise herseyi tanimlamak zorunlu hale geliyor.
const d = {
    marka: "BMW",
    model: 2021
};
const e = {
    isim: "Ahmet Nuri",
    soyisim: "Bozkir"
};
e.isim = "ferhat";
//? Burada normal bir sekilde e nin icine ulasabiliyor ve atama yapabiliyorum.
const f = {
    isim: "Soncay",
    soyisim: "Yilmaz"
};
const g = "ahmet"; //! Bu sekilde de isim´e bir tanimlama yapabilirim.
const h = {
    derecesi: "Baba",
    ikamet: "Dortmund"
};
//! Yani job string, number, void, Function olabilir ama boolean olarak tanimlanamaz!
const myJob = 3;
//! Exclude tanimlanan typelerin icinden bazilarini virgülden sonra tekrar yazarsak bunlari görmezden geliyor. Yani kullanamiyoruz.
//???????????????????????????????????????????????
//! ReturnType
function geriyeSayiDöndür() {
    return 25;
}
const myValue = 25; //! bu sekilde fonksiyonun degerini alabiliyoruz.
