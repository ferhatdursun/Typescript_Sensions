interface Person {
    firstName: string;
    lastName: string;
    yas: number;
}
declare const Insan: Omit<Person, "yas">;
interface Person2 {
    adress: string;
    Handy: number;
    F: symbol;
}
declare const Insan2: Omit<Person2, "Handy">;
declare function yazdir(asdas: {
    memleket: string;
    kutuk: string;
}): void;
declare type AsdasTipi = Parameters<typeof yazdir>["0"];
declare const Sonuc: AsdasTipi;
interface Car {
    marka: string;
    model: number;
}
declare const c: Partial<Car>;
declare const d: Required<Car>;
interface Kisi {
    isim: string;
    soyisim: string;
}
declare const e: Kisi;
declare const f: Readonly<Kisi>;
interface Akraba {
    isim: string;
    derecesi: string;
    ikamet: string;
    yas: number;
}
declare const g: Akraba["isim"];
declare const h: Pick<Akraba, "derecesi" | "ikamet">;
interface Meslek {
    isim: string;
    maas: number;
    tercih: boolean;
}
declare type job = Exclude<string | number | (() => void) | Function, boolean>;
declare const myJob: job;
declare function geriyeSayiDöndür(): number;
declare const myValue: ReturnType<typeof geriyeSayiDöndür>;
