let x: number = 15;
let y: Number = 30;

x > y ? console.log(x) : console.log(y);

//? Switch-Case

let day: number = 2;

switch (day) {
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Sali");
    break;
  case 3:
    console.log("Carsamba");
    break;
  case 4:
    console.log("Persembe");
    break;
  case 5:
    console.log("Cuma");
    break;
  case 6:
    console.log("Cumartesi");
    break;
  case 7:
    console.log("Pazar");
    break;
  default:
    console.log("8. gün");
    break;
}

//? For

for (let i = 0; i < 3; i++) {
  console.log("I degerim", i);
}



let arr = [10, 20, 30, 40];

for (let i of arr) {
  console.log("arr: of;",i);  
}

for (let i in arr) { //! in ile index degerlerini alabiliyoruz!!!
  console.log("index: i;",i);
  
}

let myName = "Ferhat Dursun";

for (let item of myName) {
  console.log("myName_item;",item);
  
}



//? While Döngüsü

let counter = 0;

while (counter < 5) {
  console.log("counter;",counter);
  counter++;
  if (counter == 3) {
    break;
  }
}

do {
  console.log("do while;", counter);
  counter++;
} while (counter < 5);

