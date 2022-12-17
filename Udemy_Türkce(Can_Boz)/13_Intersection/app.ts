interface IBusinessPartner {
  name: string;
  credit: number;
}

interface IIdentity {
  name: string;
  id: number;
}

interface IContact {
  email: string;
  phone: string;
}

type Employee = IIdentity & IContact;

let kisim: Employee = {
  id: 55,
  name: "Ferhat",
  email: "ferhatdursnu@gmail.com",
  phone: "123124124",
};

console.log(kisim);

type Customer = IBusinessPartner & IContact;

let müsterim: Customer = {
  credit: 1213,
  email: "asdasd@asfasf",
  name: "Ferhat Dursun",
  phone: "123123",
};

console.log(kisim);
