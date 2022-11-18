// type MyObject = {

//   isim: string;

//   yas: string;
// };

//! Üst tarafta ki isim ve yas'in hemen sonrasinda ? koyarsak bu onlari optionel yapar. Yani myobject icerisinde mutlaka kullanmamiz gerekmez.

// type MyObject = Partial<{
//   isim: string;

//   yas: string,
// }>;

type MyObject = {
  isim: string;

  yas: string;

  [key: string]: string | number; //! Bu sekilde (any Type'i olarak) yazildiginda key alt da(myobject) zorunlu olarak kullanilmak durumunda olmuyor. VE bu key herhangi birsey olabilir!!! Ama bunun icin Type destegi alamiyoruz.
};

const myobject: MyObject = {
  isim: "Ferhat",
  yas: "20",
  sehir: "Dortmund",
};

//?????????????????????????????????

const Objelerim: Record<string, {yas: number}> = {
  acikMi: {yas:30}
};

//! Bu sekilde de kullanimi mevcuttur.



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


type silPerson = {
  vorname: string,
  nachname: string,
  alt?: number,
  [key: string]: any
}

const silperson: silPerson = {
  vorname: "Ferhat",
  nachname: "Dursun",
  yas: 30
}


const silMyCiro: Record<number, { ciro: number }> = {
  2020: {
    ciro: 4.3
  }
}

const myGeld: Record<number, { mygeld: number }> = {
  2022: {
    mygeld: 2.1
  }
}