function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Can",
    lastName: "Boz"
};
person.firstName = "Ferhat";
//! let person a Person type atamasi yaptigimizdan dolayi ve firstname Person icersinde readonly olarak tanimlandigindan dolayi burada degistirmeye izin vermiyor.
console.log(getFullName(person));
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLowerCase();
};
console.log(format("Ferhat Dursun", true));
