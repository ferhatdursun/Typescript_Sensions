import Person, { Student } from "./person"; //! Buraya ilk ./person yazdigimiz da görmüyor. person.ts de class Person´un basina export eklememiz gerekiyor.
import {} from "./all";
import type {} from "./person"; //? Sadece type import etmek istiyosak, bu sekilde import edebiliriz!!!

console.log(Person.isim);

console.log({
  isim: "Ferhat",
  sinif: 8,
} as Student); //! as Student sayesinde person.ts sayfasinda ki type Student´i burada yazdiriyoruz.

const a: Student = {
  //! Burada person.ts sayfasinda ki Student type´ina erisiyoruz!
  isim: "Serhat",
  sinif: 12,
};
console.log(a);
