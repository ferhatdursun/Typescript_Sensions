interface Person {
  firstName: string;
  lastName: string;
  middleName?: string;
}

function getFullName(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}
let person: Person = {
  firstName: "Can",
  lastName: "Boz",
  //   middleName: "Ferhat",
  //   age: 29,
};

person.firstName = "Ferhat";
//! let person a Person type atamasi yaptigimizdan dolayi ve firstname Person icersinde readonly olarak tanimlandigindan dolayi burada degistirmeye izin vermiyor.

console.log(getFullName(person));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? Beispiel Interface'in function olarak kullanimina bir örnek

interface StringFormat {
  (str: string, isUpper: boolean): string;
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLowerCase();
};

console.log(format("Ferhat Dursun", true));
