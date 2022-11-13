interface Person {
    firstName: string;

    lastName: string;

    yas: number;
}

const Insan: Omit<Person, "yas"> = {
    firstName: "Ferhat",
    lastName:"Dursun",
}

//! Omit ile burada interface Person icinde ki yas i kullanim disi birakip, sadece firstName ve lastName´i kullanmamiza yariyor.

interface Person2 {
    adress: string;
    Handy: number;
    F: symbol;
}

const Insan2: Omit<Person2, "Handy"> = {
    adress: "sasddsa",
    F: Symbol()
}
//! örnegin burada Handyi disarida biraktik.

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? Fonsiyonun ilk parametresinin type´ini almak icin Parameters kullaniliyor.
function yazdir(asdas: {memleket: string; kutuk:string}) {}
    //! yazdir fonsiyonu bizden burada bir parametre istiyor. O da asdas´dir.

type AsdasTipi = Parameters<typeof yazdir>["0"] //! Burada önemli olan typeof yazdir ile yazdir fonsiyonun type´ini almaktir. Sonraki 0 ise bu fonsiyonun index´e göre 0´inci parametresini kast ediyor.

const Sonuc: AsdasTipi = {
    kutuk: "asdf",
    memleket: "asd"
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//! Partial konusu; interface de tanimlananlari optional yapmaya yariyor.

interface Car {
    marka: string,
    model: number,
}

const c: Partial<Car> = {
    marka: "Audi",
    model: 2022
    //! Burada Partial´dan dolayi secerken marka ve modelin önünde ? cikiyor. Yani bunlarin optionel oldugunu gösteriyor. ? yoksa man muss
    //! Bu optionallik durumunu Car´in altinda ki markanin sagina ? ekleyerekde yapabilirdim.
}



//! REqUIRED da ise herseyi tanimlamak zorunlu hale geliyor.
const d:Required<Car> = {
    marka: "BMW",
    model: 2021
}


//! Readonly
interface Kisi {
    isim: string,
    soyisim: string,
}

const e: Kisi = {
    isim: "Ahmet Nuri",
    soyisim: "Bozkir"
}

e.isim = "ferhat"
//? Burada normal bir sekilde e nin icine ulasabiliyor ve atama yapabiliyorum.


const f: Readonly<Kisi> = {
    isim: "Soncay",
    soyisim: "Yilmaz"
}
// f.isim = "Yildiray"
//! Readonly engelledigi icin bu sekilde disaridan ulasamiyorum. 


interface Akraba {
    isim: string;
    derecesi: string;
    ikamet: string;
    yas:number;
}


const g: Akraba["isim"] = "ahmet" //! Bu sekilde de isim´e bir tanimlama yapabilirim.

const h: Pick<Akraba, "derecesi" | "ikamet"> = {
    derecesi: "Baba",
    ikamet:"Dortmund"
}
//! Burada Pick ile zorunlu olarak kullanilmasi gerekenleri belirliyoruz. "derecesi" sonrasi | eklenerek zorunlu olanlar artirilabilir. 

//??????????????????????????????????????????????

interface Meslek {
    isim: string;
    maas: number;
    tercih: boolean;
}

type job = Exclude<string | number | (() => void) | Function, boolean>
//! Yani job string, number, void, Function olabilir ama boolean olarak tanimlanamaz!
const myJob: job = 3

//! Exclude tanimlanan typelerin icinden bazilarini virgülden sonra tekrar yazarsak bunlari görmezden geliyor. Yani kullanamiyoruz.

//???????????????????????????????????????????????


//! ReturnType

function geriyeSayiDöndür() {
    return 25;
}

const myValue: ReturnType<typeof geriyeSayiDöndür> = 25; //! bu sekilde fonksiyonun degerini alabiliyoruz.