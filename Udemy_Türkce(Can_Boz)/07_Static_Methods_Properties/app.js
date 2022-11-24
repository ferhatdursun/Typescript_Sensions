var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 3;
        this.pi;
        Circle.pi++;
    }
    Circle.hesapla = function (yaricap) {
        return this.pi * yaricap * yaricap;
    };
    Circle.pi = 3.14;
    return Circle;
}());
var obj = new Circle();
var obj2 = new Circle();
console.log("obj:", obj.pi);
console.log(Circle.pi);
console.log("class Circle pi:", Circle.hesapla(5));
//! Normalde bu class Circle'i önce bir degere atayip sonradan yazdiriliyorken, static ile direk olarak bu sekilde yazdirabiliyoruz!!!
console.log(Circle.hesapla(5));
