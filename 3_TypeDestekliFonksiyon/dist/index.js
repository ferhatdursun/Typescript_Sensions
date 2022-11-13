"use strict";
//! void ist hiclik demek. Hicbirsey döndürmüyor.
function F() {
    return 25;
}
//!@ts-ignore yazarsak sonra ki gelen kodlarin Type'ini dikkate alma demis oluyoruz.
const a = F(); //! Burada number yerine string yazamayiz. Cünkü yukarida number olarak tanimladik.
function Ferhat() {
    return [25, "asdasd"];
}
const qwe = F();
function LogPerson(isim, soyisim, yas) {
    console.log({ isim, soyisim, yas });
}
LogPerson("Kadir", "Yazici", 20);
function yazmaca(isim, tekrar) {
    for (let i = 0; i < tekrar; i++) {
        console.log(isim);
    }
}
yazmaca("Ferhat", 20);
