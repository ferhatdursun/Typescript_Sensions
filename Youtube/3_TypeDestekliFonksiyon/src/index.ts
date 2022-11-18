//! void ist hiclik demek. Hicbirsey döndürmüyor.
function F(): number {
  return 25;
}

//!@ts-ignore yazarsak sonra ki gelen kodlarin Type'ini dikkate alma demis oluyoruz.
const a = F() as number; //! Burada number yerine string yazamayiz. Cünkü yukarida number olarak tanimladik.

function Ferhat(): [number, string] {
  return [25, "asdasd"];
}

function silmeF() {
  return [25, "asda"] as const; //! Burada ki as const ile silmeF() readonly oldu!
}

const asd = silmeF();

const qwe = F();

//!

function LogPerson(isim: string, soyisim: string, yas: number) {
  console.log({ isim, soyisim, yas });
}

LogPerson("Kadir", "Yazici", 20);

//!

function yazmaca(isim: string, tekrar: number): void {
  for (let i = 0; i < tekrar; i++) {
    console.log(isim);
  }
}

yazmaca("Ferhat", 20);

//! Function'u calistirmak icin ilk olarak terminalde npm run build yapiyoruz ve dadurch yaptigimiz degisikler index.js'e islenmis oluyor. Daha sonrasinda npm run start dedigimizde ise terminal de islemin sonucunu görüyoruz.
