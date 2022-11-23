var Person = /** @class */ (function () {
    function Person(id, isim, soyisim) {
        //! constructor kullandigimizda class Person ile new Person eslesmelerini this. ile yapiyoruz!
        this.firstName = isim;
        this.id = id;
        this.lastName = soyisim;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.id).concat(this.firstName).concat(this.lastName);
    };
    return Person;
}());
var kisibilgilerim = new Person(43, " Ahmet ", "Cosar"); //! Burasinin calismasi icin class icinde ki getFullName'in yorumdan cikartilmasi gerek miyor.
console.log(kisibilgilerim);
console.log(kisibilgilerim.getFullName());
