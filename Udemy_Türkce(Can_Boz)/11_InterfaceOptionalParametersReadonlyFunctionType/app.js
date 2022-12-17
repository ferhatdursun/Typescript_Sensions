function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Can",
    lastName: "Boz",
    middleName: "Ferhat",
    age: 29
};
console.log(getFullName(person));
