var myObj2 = {
    surname: "Ferhat",
    name: "Dursun"
};
function MyFunction2(age) {
    console.log({
        name: this.name,
        surname: this.surname,
        age: age
    });
}
MyFunction2.call({ surname: "Soncay", name: "Kaymaz" }, 30);
function createStore2(obj, callback) {
    callback.apply(obj);
}
createStore2({
    ad: "Ahmet",
    soyad: "Caymaz"
}, function () {
    console.log({ thisName: this.ad, thisSoyname: this.soyad });
});
