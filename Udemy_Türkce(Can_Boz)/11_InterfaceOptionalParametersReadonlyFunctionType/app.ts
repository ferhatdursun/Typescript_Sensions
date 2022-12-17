interface Person {
  firstName: string;
  lastName: string;
  middleName: string;
}

function getFullName(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}
let person = {
  firstName: "Can",
  lastName: "Boz",
  middleName: "Ferhat",
  age: 29,
};

console.log(getFullName(person));
