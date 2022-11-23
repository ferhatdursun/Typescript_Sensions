var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, isim, soyisim) {
        //! constructor kullandigimizda class Person ile new Person eslesmelerini this. ile yapiyoruz!
        this.firstName = isim;
        this.id = id;
        this.lastName = soyisim;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.id, " ").concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    //! Burada parent'in(class Person) constructor'ina ulasabilmek icin super kullaniyoruz!!!
    function Employee(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this; //? super ile burada parent(class Person) classinin constructorunu tetikliyoruz!!!
        //? Daha sonra class Personun constructoru class Person() un degerlerini aliyor(id, firstName, lastName) ve this.id .firstName .lastName olarak bunlari inheritance(miras aliyoruz) ediyoruz! Yani deger atmasini gerceklestiriyoruz!!!
        //? Ve daha sonra baska metotlarla bunlara ulasabiliyorum.
    }
    return Employee;
}(Person));
var employee = new Employee(29, "Can", "Boz"); //? employee ilk olarak class Employee constructor'a gidiyor. Bunu parentdan extends ettigimiz icin super ile parent'in(class Person) constructor'una geciyoruz!! ve orada id, firstName, lastName degerlerini inheritance ettikten sonra artik bunlari heryerde kullanabiliyoruz!!!
console.log("employee:", employee);
console.log("employee.getFullName:", employee.getFullName());
var kisibilgim = new Person(43, "Can", "Boz");
kisibilgim.id = 5;
console.log("kisibilgim.id: ", kisibilgim.id);
