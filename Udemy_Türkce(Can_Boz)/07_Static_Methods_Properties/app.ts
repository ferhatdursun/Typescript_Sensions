class Circle {
    static pi: number = 3.14;
    pi = 3

    constructor() {
        this.pi;
        Circle.pi++
    }

    static hesapla(yaricap: number) { //! Method
        return this.pi * yaricap * yaricap;
    }
}
let obj = new Circle();
let obj2 = new Circle();

console.log("obj:", obj.pi);
console.log(Circle.pi);
console.log("class Circle pi:",Circle.hesapla(5));
//! Normalde bu class Circle'i önce bir degere atayip sonradan yazdiriliyorken, static ile direk olarak bu sekilde yazdirabiliyoruz!!!






console.log(Circle.hesapla(5));
