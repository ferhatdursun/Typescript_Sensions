import { toNamespacedPath } from "path";
import { addAbortSignal } from "stream";

type Person = {
  isim?: string;
  soyad?: string;
  yas: string;
  durum: string;
};

const obj: Person[] = [
  {
    isim: "asd",
    soyad: "123",
    yas: "2123",
    durum: "asd",
  },
];

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!

type Colors = "red" | "green" | "blue";

type CustomColors = "magenta" | "cyan" | "turqoise";

const myColor: Colors = "blue";

const colorArray: (Colors | CustomColors)[] = ["blue", "green", "red", "magenta", "cyan"];

//! Bu sekilde Colors ve CustomColors birlesmis oldu. Ve suanda ikisinin de icine ulasabilecek durumdayiz.

type AllColors = Colors | CustomColors;

const tümColors: AllColors[] = ["cyan", "green", "magenta", "red"]

//???????????????????????


type Kisi = {
    isim: string;
    soyisim: string;
    yas: number;
}

type Dog = {
    yas: number;
    cins: string;
    tur: string;
}

type DogPerson = Person & Dog

const persondog =  {
    "yas": 12,
    "tur": "j",
    "cins": "asd",
} as DogPerson

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


type PersonMap = Map<string, Kisi>;

const myMap: PersonMap = new Map();

myMap.set("Ferhat", {
    isim: "Ferhat",
    soyisim: "asd",
    yas: 12,
})

