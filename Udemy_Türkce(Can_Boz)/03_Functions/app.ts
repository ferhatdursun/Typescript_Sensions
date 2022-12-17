function add(a: number, b: number): number {
  //! Burada functiondan sonra yazdigimiz ():number su demek; bu fonksiyon geriye number döndürsün. Buraya number yazmasak bile, Typescript bunu Typeinference yardimi ile tahmin ediyor.
  return a + b;
}

let toplam = add(10, 30);
console.log("toplam;", toplam);
console.log("typeof toplam;", typeof toplam);


function bastir(): number { //! Eger number yerine string yazarsak return geriye sadece string türünde bir deger döndürebilir!
  console.log("Can Boz");
  //! Eger burada return kullanirsak, return'ün mutlakada  degeri döndürmesi gerekiyor. Yani function´í hangi type olarak tanimlarsak return o type'da bir deger geriye döndürmesi gerekiyor!!!
  return 12; 
}
bastir();


//! Beispiel
function birlestir(ad: string, soyad: string) {
  return ad + "/" + soyad;
}

let degisken = birlestir("Ferhat", "Dursun")

console.log(degisken);


//! Beispiel Default_Parameters
function defaultParameters(ad: string, soyad:string = "Kaymaz") { //! Burada tanimlama yaptigimiz icin asagida fonksiyonu cagirirken tek parametre verebiliriz!!! Burada ki önceden tanimlanmis olan 2. parametre otomatik olarak ekleniyor!!! Eger alt tarafta da ikinci parametreyi verirsek, 2. 1. yi eziyor!!!
  return ad + "?" + soyad;
}
let myDefaultParameters = defaultParameters("Ahmet");
console.log(myDefaultParameters);


//! Optional Parameters
//? Olursa olur, olmazsa islem yapmam anlaminda!!

function carpma(a: number, b: number, c?: number): number{ //! Fonksiyonun disinda ki number, bu fonksiyon geriye number döndürecek demektir!!!
  console.log("typeof c;", typeof (c));
  
  if (typeof c === "number") {
    return a * b * c;
  }
  return a * b;
}

let sonucCarpma = carpma(2, 3, 5) //! Burada 5 yerine baska bir type yazarsak return a*b kismi calisacak!!! Ve burada c icin herhangi bir deger göndermezsek c'nin type'i undefined oluyor.
console.log("sonucCarpma;", sonucCarpma);



//? Arrow Function Kullanimi

function arrowCarpim(ac: number, ab: number): number {
  return ac * ab;
}


//! bu function'u arrow function halinde yazicaz!!
let arrowCarpim2 = (a: number, b: number): number => {
  return a * b;
//! bu sekilde kisaltabiliriz!!
//! let arrowCarpim2 = (a: number, b:number): number => a * b;

}


let myArrowCarpim2 = arrowCarpim2(4, 2);
console.log("myArrowCarpim2;", myArrowCarpim2);


//!!
let Print = () => {
  console.log("Print");
}
Print()

let Yazdir = console.log("Yazdir"); //! Bu üstte ki let Print'in kisa yazim tarzi!!!

  
//! Function Overloading

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
//! Ilk olarak bu ikisinde yapacagimiz islemleri tanimliyoruz. Daha sonra altta ki gibi function any type ile tanimliyoruz. Ve suanda add2() function number degeri de string degeri de alsa fark etmiyor, calisiyor!!!


function add2(a: any, b: any): any {
  return a + b;
}

let degisken2 = add2(5, 5)
console.log(degisken2);



//! REST PARAMETERS
function toplam2(a: string, ...numbers: number[]):number {//! Burada ki ...numbers ist Rest Parameters. Ve ne kadar number degerler verirsek verelerim numbers'in icinde tutulacak!!!
  console.log("toplam2/a;",a);
  let total = 0;
  numbers.forEach((num) => total += num);
  return total; 
}

console.log(toplam2("Can", 20, 30));



//! Beispiel rest parameters
function birlestir2(message: string, ...names: string[]) {
  console.log(message + " " + names.join(", "));
  
} 
birlestir2("Selam", "Ali", "Ahmet", "Soncay")







