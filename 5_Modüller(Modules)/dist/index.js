"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person")); //! Buraya ilk ./person yazdigimiz da görmüyor. person.ts de class Person´un basina export eklememiz gerekiyor.
console.log(person_1.default.isim);
console.log({
    isim: "Ferhat",
    sinif: 8,
}); //! as Student sayesinde person.ts sayfasinda ki type Student´i burada yazdiriyoruz.
const a = {
    //! Burada person.ts sayfasinda ki Student type´ina erisiyoruz!
    isim: "Serhat",
    sinif: 12,
};
console.log(a);
