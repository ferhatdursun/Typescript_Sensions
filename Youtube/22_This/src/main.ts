const myObj2 = {
    surname: "Ferhat",
    name: "Dursun"
}

function MyFunction2(this: typeof myObj2, age: number) {
    console.log({
        name: this.name,
        surname: this.surname,
        age
    });    
}
MyFunction2.call({ surname: "Soncay", name: "Kaymaz" }, 30)









function createStore2<T extends object>(obj: T, callback: (this: T) => void) { 
callback.apply(obj)
    
}

createStore2({
    ad: "Ahmet",
    soyad: "Caymaz"
}, function () {
    console.log({thisName: this.ad, thisSoyname: this.soyad})
})

