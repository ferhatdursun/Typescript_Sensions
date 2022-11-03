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

  [key: string]: string | number; //! Bu sekilde (any Type'i olarak) yazildiginda key alt da(myobject) zorunlu olarak kullanilmak durumunda olmuyor. Ama bunun icin Type destegi alamiyoruz.
};

const myobject: MyObject = {
  isim: "Ferhat",
  yas: "20",
  sehir: "Dortmund",
};

//?????????????????????????????????

const Objelerim: Record<string, boolean> = {
  acikMi: true,
};

//! Bu sekilde de kullanimi mevcuttur.
