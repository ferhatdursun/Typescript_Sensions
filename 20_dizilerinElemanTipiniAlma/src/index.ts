const myArray = [1,5,12,231,124, "string"];

function MyFunction<T>(arr: T[]) {}

MyFunction(myArray) //! Bunun Type´i string oder number

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const myObject = {
    name: "Ferhat",

    age: 30
}


myOtherFunction(myObject)

function myOtherFunction<T, K = keyof T>(obj: T) {}
//! Burada T name: string, age: number. Ama K "name" | "age"



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const myArray2 = [123,124,214,23,34,123, "string", true] as const; //! Burada myArray2 dizisinin genisliginin degismesini istemiyorsak sonuna as const ekleyebiliriz. Dadurch nur readonly oluyor.

//! type MyType = typeof myArray2[keyof typeof myArray2] bu sekilde yazarsak, Prototype´ina kadar iniyor 

type MyType = typeof myArray2[number] //! Buraya sadece number yazdigimiz da, MyType´in Type´i number, string ve boolean oluyor.


//? myArray2.push(2) myArray2´nin sonunda as const ekledigim icin, myArray2´nin genisligi degistirilemiyor.













