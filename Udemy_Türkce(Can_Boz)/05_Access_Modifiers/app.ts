class Person {
  public id: number; //! Bunun Access Modifier public oldugu icin console.log(sahsiBilgilerim.id) olarak yazdirabiliyoruz!!!
  private firstname: string; //! Bunun Acces Modifier private oldugu icin console.log(sahsiBilgilerim.firstname) olarak yazdiramiyoruz!!! Ama class icinden erisebiliyoruz!!!
  protected readonly lastname: string; //! Bu classdan türeyen diger classlarda kullanilabilir. Ama baska classdan türetilmis bir class'da kullanilamaz!!!

  constructor(kimlikNo: number, isim: string, soyisim: string) {
    this.id = kimlikNo;
    this.firstname = isim;
    this.lastname = soyisim;
  }

  getFullName() {
    return `${this.id} ${this.firstname} ${this.lastname}`;
  }
}

let sahsiBilgilerim = new Person(30, "Ferhat", "Dursun");
sahsiBilgilerim.id = 74 //! Readonly OLMADIGI icin id ye burada yeni bir deger verebiliyorum!!!
//?  sahsiBilgilerim.lastname = "asdf" yapamayiz. Cünkü readonly
console.log(sahsiBilgilerim);
console.log(sahsiBilgilerim.id);
