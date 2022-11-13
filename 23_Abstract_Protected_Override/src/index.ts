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



//! Basinda abstract yokken const point´ de bu sekilde üretebiliyoruz.
//! Ama class Point´in basinda abstract yazarsak üretemeyiz sadece türetebiliriz.
class Point {
    constructor(public x: number, public y: number){

    }
}

const point = new Point(10,20) //!class Point in basinda abstract yazmadiginda bunu yorumdan cikarabilirsin!
point.x



//! Abstract

//! abstract oldugunda bundan sadece türetebiliriz.

abstract class Point2 {
    constructor(public x: number, public y: number){
        //! Eger burada x veya y private olursa, player2´nin icinde bunlara erisemeyiz!
    }
}

class Player2 extends Point2 {
    constructor() {
        super(10,10);
    } //! burada ki super Point class´i
}

const player2 = new Player2();

player2.x //! Bu sekilde x ve y´ye erisebiliyoruz.


//??????????????????????????????????????????????


abstract class Point3 {
    constructor(protected x: number, protected y: number){
        //! Protected oldugunda ise, sadece kendisine aktif degil, kendisinden türetilenlere de aktif.
        //! Yani kendisinden türetilenlerde bunlara ulasabilir! Ama bunlarin disindan ulasilamaz!!!
        //! Ve burada private constructor yaparsak bundan extends yapamayiz!! extends Point3 hata verir.
        //! Ama abstract´i silersek burada yani icinde cagirabiliriz!!
    }
}

class Player3 extends Point3 {
    constructor() {
        super(10,10);
        this.x
        this.y
    } 
}

const player3 = new Player3();

//! player3.x //! Protected´dan dolayi bu sekilde x ve y´ye erisemiyoruz!!!



//?????????? Override



class Point4 {
    public log() {
        console.log("Selam");
    }
}

class Player4 extends Point4 {
    public override log() {
        //! override; bu fonksiyonun (log) pärent class´da(Point4) olup olmadigini kontrol eder. Yani bir nevi teyit ediyor. Eger teyit olumsuz olursa hata veriyor! Mesela altta ki örnekde ki gibi.
        //! Basina public yazmak sart degildir.
        //! Override ile pärent classta ki bir fonksiyonun üstüne yazdigimizi da göstermis oluyoruz!!!
    }
    //!! override create(){
//! pärent class da (Point4) create diye bir fonksiyon olmadigi icin hata aliyoruz. Override bunu kontrol ediyor.
    //! }
}

new Player4().log