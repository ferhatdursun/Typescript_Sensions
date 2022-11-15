interface IStudent {
    isim: string;

    soyad: string;

    sinif: number;

    getStudentInformation(): {
        isim: IStudent["isim"];

        soyad: IStudent["soyad"];

        sinif: IStudent["sinif"];
    }
}


//! Burada implements ile class ile interface i birlestirmis olduk. Yani interfaceleri classlara baglama islemi yapiyoruz.
export class Student implements IStudent {
    constructor(public isim:string, public soyad: string, public sinif: number) {}
    getStudentInformation() { 
       //! return this; Bu sekilde yazarsak alt da ki gibi tek tek yazmaya gerek kalmiyor. This direkt olarak constructor u kast ediyor.
       return {
        isim: this.isim,
        soyad: this.soyad,
        sinif: this.sinif
       }
     } 
     yazdir(){
        console.log(this.isim, this.soyad, this.sinif);
        
     }
}