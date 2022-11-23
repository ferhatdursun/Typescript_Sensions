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
        return `${this.id} ${this.firstName} ${this.lastName}`
    }
}
class Employee extends Person {
    //! Burada parent'in(class Person) constructor'ina ulasabilmek icin super kullaniyoruz!!!
    constructor(
        id: number,
        firstName: string,
        lastName: string
    ) {
        super(id, firstName, lastName) //? super ile burada parent(class Person) classinin constructorunu tetikliyoruz!!!
        //? Daha sonra class Personun constructoru class Person() un degerlerini aliyor(id, firstName, lastName) ve this.id .firstName .lastName olarak bunlari inheritance(miras aliyoruz) ediyoruz! Yani deger atmasini gerceklestiriyoruz!!!
        //? Ve daha sonra baska metotlarla bunlara ulasabiliyorum.
    }
}
let employee = new Employee(29, "Can", "Boz"); //? employee ilk olarak class Employee constructor'a gidiyor. Bunu parentdan extends ettigimiz icin super ile parent'in(class Person) constructor'una geciyoruz!! ve orada id, firstName, lastName degerlerini inheritance ettikten sonra artik bunlari heryerde kullanabiliyoruz!!!
console.log("employee:", employee);
console.log("employee.getFullName:", employee.getFullName());






let kisibilgim = new Person(43, "Can", "Boz")
kisibilgim.id = 5;

console.log("kisibilgim.id: ",kisibilgim.id);



