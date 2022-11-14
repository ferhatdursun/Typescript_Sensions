//! Typescript de degisken yazarken onun tipini belirtmeye gerek yok. Typescript bu islemi otomatik olarak yapiyor.

let myname = "kadir";
//? myname = 25
//! Eger üstte string olan myname'i burada tekrardan number olarak tanimlamak istersek Typescript bize hata döndürüyor.
//! let olanlar ayni type da yeniden tanimlanabilir. Ama const olanlar degistirilemezdir. 
//! Mesela altta ki const ferhat = "yes", const ferhat = "Ahmet" olmaz!!!


const ferhat = "yes";
//! Burada ferhat'in Type'ni const ile kesin olarak belirledik ve daha sonra ferhat = "24" veya = "Ali" dahi yapamayiz.

////////////////////////////////////////////////?

let benim_adim: string | number = "asdasd";
//! :, iki nokta üst üste degiskenlerde Type tanimlamadir.
//! | yada demektir.

benim_adim = "ferhat";

benim_adim = 24;

function change() {
  benim_adim = "asd";

  benim_adim = 74;
}

function check() {
  if (typeof benim_adim === "string") {
    benim_adim.toUpperCase;
  }
  if (typeof benim_adim === "number") {
    benim_adim.toPrecision;
  }
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!

let a = true;

a = false;

a = !a;

a = !!a;

//????????????????????????????

const c = undefined;

let b: any = 25;

function kontrol() {
  if (b instanceof String) {
    b.toUpperCase;
  }
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let d: string = "asdads";

let e: number = 24;

let f: boolean = true;

let g: undefined = undefined;

//////////////////////////////?

const Person: { //! Buradan acilan objenin adi Type objesidir.
  isim: string;
  yas: number;
  sehir: string;
  bilmem: "bilmem" | "bilirim" | "what";
} = {
  isim: "Ferhat",
  yas: 24,
  sehir: "Dortmund",
  bilmem: "bilmem", //! bilmem Type object de tanimlanan 3 tanesinden birisi olabilirken. sehir, yas ve isim tanimlandiklari type olarak her degeri alabilirler.
};

//! Person.isim = 23, üst tarafta string olarak tanimlandigi icin burada isim'i number olarak tanimlamaya izin vermiyor.
//? Yukarida person icerisinde bilmem: "bilmem" olarak tanimlandigindan dolayi alt tarafta bilmem'i sadece bilmem olarak yazabiliriz. Ama yanina | isareti konulursa farkli sekillerde de tanimlana bilir.

let deger: 5 | 25 | 45 = 5;

let isimler: "Ferhat" | "Ahmet" | "Mehmet" = "Ferhat";
console.log(isimler);

deger = 5; //! Burada deger sadece 5  25  45 olabilir.

isimler = "Ahmet";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? DIZI TYPELARI TANIMLAMA ?//

let örnek: any = 5;

const soncay = örnek as number; //! Burada as sayesinde soncay'in number oldugunu söylemis olduk.

const dizi = []; //! Type'i anydir. Dizinin icinde herhangi birsey tanimlanmamistir. Icerisin de hersey tanimlanabilir.

const dizi2: string[] = []; //? Bu sekilde any olani string dizisi olarak tanimlayabiliriz.

const dizi3 = [] as number[]; //? Bu sekilde de Type'i any olan bir degeri number'a cevirebiliriz.

const dizi4: string[] | number[] | boolean[] = [];

const dizi5: (number | boolean | string)[] = ["asda", 12, true, false]; //! Ama burada Symbol Type'i eklenemez. Eger number, boolean, string'den sonra Symbol yazarsak false'den sonrada Symbol ekleyebiliriz.

const dizi6 = [] as Array<string>; //! Bu sekilde de type tanimlamasi yapilabilir.

const myDizi: [string, string, number] = ["ferhat", "Dursun", 12]; //!Bunlar Tuple Type'i

const [isim, soyad, yas] = myDizi; //! burada isim = string, soyad = string, yas = number

myDizi[2].toFixed; //! Type'i number. myDizi de 2'inci






//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





let myname2: string | number;

function change2() {
    myname2 = "asd",
    myname2 = 12;  
}


function silCheck() {
  if (b instanceof HTMLInputElement)
    b.COMMENT_NODE
  }

let sila: string = "a"

let silnumber: number = 5

let silboolean: boolean = true

let silundefiend: undefined = undefined

let silsymbol: symbol = Symbol()


const silPerson = {
  silisim: "Ferhat",
  silSoyisim: "Dursun",
  silKanal: "Youtube"
}


