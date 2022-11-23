class Person {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, isim: string, soyisim: string) { //! constructor icine yazdiklarimiz new Person() da verdigimiz degerler. Yani constructor ile new Person ile class Person'u eslestiriyoruz!
        //! constructor kullandigimizda class Person ile new Person eslesmelerini this. ile yapiyoruz!
        this.firstName = isim;
        this.id = id;
        this.lastName = soyisim;
    }

    getFullName() {//! Class icinde function tanimlama ve kullanma
        return `${this.id}${this.firstName}${this.lastName}`
    }
}

let kisibilgilerim = new Person(43, " Ahmet ", "Cosar") //! Burasinin calismasi icin class icinde ki getFullName'in yorumdan cikartilmasi gerek miyor.
console.log(kisibilgilerim);

console.log(kisibilgilerim.getFullName());


