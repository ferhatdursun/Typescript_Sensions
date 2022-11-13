
const myObj = {
    name: "Kadir",
    surname: "Yazici"
}

function myFunction(this: typeof myObj, age: number) { //! Arrow functionlarin this´i olmaz. Arrow Functionlarda this bize windows´u verir.
    this.name //! Bu sekilde myObj icine ulasabiliyoruz.
    console.log({
        name: this.name,
        surname: this.surname,
    })
}

myFunction.call({name: "Ahmet", surname: "Bruhmoment"}, 20) 
//! Burada call ile name ve surname´i degistirdik ve console.log da this ile yazdirdik.
//! function myFunction icinde ki this: typeof myObj ile const myObj ye ulastik. myFunction.call ile de function´a ulasip call´in icinde name ve surname´i degistirdik. Ve ikinci parametre olarak da age:20 oldu.
//! Cünkü süslü icinde ki name ve surname this: typeof myObj icin. 20 de age icin oluyor.
//! Temel mantik olarak call ile function myFunction´in this´ini degistirmis olduk.
//? ve arrow functionlarin this´i yoktur. 





function createStore<T extends object>(obj: T, callback: (this: T) => void) {
    callback.apply(obj)
}

createStore({
    name: "kadir",
    surname: "Yazici"
}, function() {
     console.log({
        thisName: this.name
     });
});




function Magza<T extends object>(obje: T, zurückrufen: (this: T) => void){
    zurückrufen.apply(obje)
}

Magza({
    isim: "Osman",
    aileadi: "Genc"
}, function(){
    console.log({
        thisName: this.isim,
        thisAileadi: this.aileadi
    })
})
