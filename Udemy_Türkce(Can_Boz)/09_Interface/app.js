//! Backenden gelen datalarin(prepörtilerin) typelarinin tanimlanmasinda kullaniliyor!!!
//? interfaceler genel olarak type kontrolü icin kullaniliyor.
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Ferhat",
    lastName: "Dursun"
};
console.log(getFullName(person));
//! INTERFACE OPTIONAL PARAMETERS READONLY FUNCTION TYPE
