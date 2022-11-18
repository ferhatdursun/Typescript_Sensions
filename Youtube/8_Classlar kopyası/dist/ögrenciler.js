"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
//! Burada implements ile class ile interface i birlestirmis olduk. Yani interfaceleri classlara baglama islemi yapiyoruz.
class Student {
    constructor(isim, soyad, sinif) {
        this.isim = isim;
        this.soyad = soyad;
        this.sinif = sinif;
    }
    getStudentInformation() {
        //! return this; Bu sekilde yazarsak alt da ki gibi tek tek yazmaya gerek kalmiyor. This direkt olarak constructor u kast ediyor.
        return {
            isim: this.isim,
            soyad: this.soyad,
            sinif: this.sinif
        };
    }
    yazdir() {
        console.log(this.isim, this.soyad, this.sinif);
    }
}
exports.Student = Student;
