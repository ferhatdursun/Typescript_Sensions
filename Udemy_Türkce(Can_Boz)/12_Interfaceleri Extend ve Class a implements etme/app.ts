// interface IPerson {
//   name: string;
//   gender: string;
// }

// interface IEmployee extends IPerson {
//   empNumber: number;
// }

// //! Yani IEmployee IPersondan türedigi icin IEmployeeenin icinde yazmasa bile burada IPerson icindekileri kullanabiliyoruz ama kullanmaya mecbur degiliz!!!. Ayni zamanda IEmployee ye yeni tanimlamalar ekleyebiliriz!!!!
// let employee: IEmployee = {
//   empNumber: 1,
//   name: "Ferhat",
//   gender: "Male",
// };

interface IPerson {
  name: string;
  gender: string;
}

class Employee implements IPerson {
  empNumber: number;
  name: string;
  gender: string;
  constructor(empNumber: number, name: string, gender: string) {
    this.empNumber = empNumber;
    this.name = name;
    this.gender = gender;
  }
}

let employee = new Employee(5, "Can", "Male");
console.log(employee);

//! Burada class yapisindan dolayi constructor kullandik. Ve constructor icerisinde herbirini es degerine esitledik. this.empNumber Employeenin = empNumber ise constructor'un
