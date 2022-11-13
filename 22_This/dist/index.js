"use strict";
const myObj = {
    name: "Kadir",
    surname: "Yazici"
};
function myFunction(age) {
    console.log({
        name: this.name,
        surname: this.surname,
    });
}
myFunction.call({ name: "Ahmet", surname: "Bruhmoment" }, 20);
