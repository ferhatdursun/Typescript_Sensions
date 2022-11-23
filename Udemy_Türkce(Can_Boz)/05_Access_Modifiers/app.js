var Person = /** @class */ (function () {
    function Person(kimlikNo, isim, soyisim) {
        this.id = kimlikNo;
        this.firstname = isim;
        this.lastname = soyisim;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.id, " ").concat(this.firstname, " ").concat(this.lastname);
    };
    return Person;
}());
var sahsiBilgilerim = new Person(30, "Ferhat", "Dursun");
sahsiBilgilerim.id = 74; //! Readonly OLMADIGI icin id ye burada yeni bir deger verebiliyorum!!!
//?  sahsiBilgilerim.lastname = "asdf" yapamayiz. Cünkü readonly
console.log(sahsiBilgilerim);
console.log(sahsiBilgilerim.id);
