//! Interfaceler Kullanici tarafindan degistirilebilir, genisletilebilir. Ama Typelar degistirilemez, genisletilemez.

interface Person {
  isim: string;
  soyad: string;
  [key: string]: any;
  //! Burada ki any; Type'i herhangi birsey olabilir demek.
}

const ferhat: Person = {
  isim: "ferhat",

  soyad: "dursun",

  qwerty: "asdasd",
};

const isim: Person["soyad"] = "Faso";
//? Burada interface sayesinde üstte ki Person'un icine ulasmis oldum.

//! npm i express @types/express, express yazarken bize Type kontrolü yapmayi saglar.

import { Request, Response, Handler } from "express";

type FunctionThatReturnsBoolean = (id: string, password: string) => boolean;

const myFunction: FunctionThatReturnsBoolean = (id, password) => {
  return true;
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//!? Diziler de bir objedir ama daha fazla özellikleri vardir.

//! Dizi interface
interface MyArray {
  [index: number]: string | number;
}

const array: MyArray = ["ferhat", 30]; //! Burada dizinin icine boolen ekleyemeyiz. Cünkü interface de sadece string veya number olabilir dedik.

//! Function Interface
interface IFunction {
  (isim: string, tekrar: number): void;
  (isim: number, tekrar: boolean): boolean;
}
//?interface de function yazarken parametreleri artiramayiz!

interface IAnotherFunction extends IFunction {
  (yas: number, tekrar: boolean): void;
}

const anotherfunction: IAnotherFunction = () => {
  return true;
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

interface MongoResponse {
  _id: string;
  createdAt: string;
  updateAt: string;
}

//! Burada extends MongoResponse yaptigimizda BooksResponse hem Mongonun özelliklerine sahib hem de kendisine yeni özellikler eklenebilir oluyor.
interface BooksResponse extends MongoResponse {
  name: string;
  date: Date;
}

function getBooks(): BooksResponse {
  return {
    _id: "12312",
    createdAt: "",
    updateAt: "",
    date: new Date(),
    name: "no name",
  };
}

//???????????????????????????????????????????????????

interface IStudent {
  isim: string;
  soyad: string;
  sinif: number;

  getStudentInformation(): {
    isim: IStudent["isim"];

    soyad: IStudent["soyad"];

    sinif: IStudent["sinif"];
  };
}

const obj: IStudent = {
  isim: "Ferhat",
  sinif: 15,
  soyad: "Dursun",

  getStudentInformation() {
    return {
      isim: this.isim,
      sinif: this.sinif,
      soyad: this.soyad
      //! Bu objeler de eger ki arrow function kullanmiyorsak, normal function kullaniyorsak burada this bu objeyi(IStudent) temsil eder.
    }
  }
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



interface IsilPerson {
  isim: string,
  soyad: string,
  [key: string]: any;
}

const Ferhat: Person = {
  isim: "ferhat",
  soyad: "Dursun",
  memleket: "Bartin"
}

const silIsim: IsilPerson["soyad"] = "Dursun"


interface IsilMyArray {
  [index: number]: string | number;
}

const IsilArray: MyArray = ["kadir", 25]



interface IFunction {
  (isim: string, tekrar: number): void;
  (isim: string, tekrar: number, memleket: string): void;
}

interface IAnotherFunction extends IFunction {
  (yas: number, tekrar: boolean, memleket: string): void;
}


interface ISilStudent {
  isim: string;
  soyisim: string;
  sinif: number;
  silgetStudentInformation(): {
    isim: ISilStudent["isim"];
    soyisim: ISilStudent["soyisim"];
    sinif: ISilStudent["sinif"];
  }
}

const silObj: ISilStudent = {
  isim: "kadir",
  sinif: 15,
  soyisim: "Yazici",

  silgetStudentInformation() {
    return {
      isim: this.isim,

      sinif: this.sinif,

      soyisim: this.soyisim
    }
  }
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


interface ISilBeni {
  silisim: string,
  silsoyisim: string,
  silyas: number,
  
  silGetBenimInformationum(): {
    silisim: ISilBeni["silisim"];
    silsoyisim: ISilBeni["silsoyisim"];
    silyas: ISilBeni["silyas"];
  }
}


const silbilgi: ISilBeni = {
  silisim: "Fero",
  silsoyisim: "Dursun",
  silyas: 30,

  silGetBenimInformationum() {
    return {
      silisim: this.silisim,
      silsoyisim: this.silsoyisim,
      silyas: this.silyas
    }
  }
}



