const myArray3 = [1, 2, 4, "string"]


function myFunction<T>(params: T[]) {}

myFunction(myArray3) //! Bu sekilde myFunction´un string oder number oldugunu görebiliyoruz.


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//? Bir objenin parametrelerine function ile ulasma!!!

const myObj = {

    benimAdim: "Ferhat",

    benimYasim: 30
}


function myObjFunction<T, K = keyof T>(params: T){}

myObjFunction(myObj)


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//? Bir Array´in elemanlarinin type´ini nasil aliriz?

const benimArrayim = [1, 2, 3, "string"] as const  //! as const ile benimArrayim´i degistirilemez hale  getirdik!!! Yain readonly yaptik!

type benimTypeim = typeof benimArrayim["3"]