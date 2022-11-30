//! Backenden gelen datalarin(prepörtilerin) typelarinin tanimlanmasinda kullaniliyor!!!
//? interfaceler genel olarak type kontrolü icin kullaniliyor.

interface Person {
    firstName: string,
    lastName: string,
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: "Ferhat",
    lastName: "Dursun"
}

console.log(getFullName(person));




//! INTERFACE OPTIONAL PARAMETERS READONLY FUNCTION TYPE



