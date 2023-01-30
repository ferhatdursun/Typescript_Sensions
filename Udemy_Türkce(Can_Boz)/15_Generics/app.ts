function getRandomNumber(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 54, 65, 7, 8];
// console.log(getRandomNumber(numbers));

function getRandomString(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let adlarim = ["Can", "Tuba", "Merve"];
// console.log(getRandomString(adlarim));

// function getRandomElement(items: any): any {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

let degiskenlerim = [true, false, true];
function getRandomElement<T>(items: T[]): T {
  //! T yerine herhangi birsey de yazilabilir ve bu T type demektir. Yani getRandomElemente type tanimlamasi yapiyoruz.
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
//! getRandomElement T tipinde bir function. items tipi de T olarak tanimlanmis oluyor ve geriye dönüs tipi de T oluyor. T{} den dolayi.

console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<string>(adlarim));
console.log(getRandomElement<boolean>(degiskenlerim));
