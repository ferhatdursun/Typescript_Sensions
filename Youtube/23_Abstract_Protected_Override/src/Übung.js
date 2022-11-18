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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var kardesPoint = /** @class */ (function (_super) {
    __extends(kardesPoint, _super);
    function kardesPoint() {
        return _super.call(this, "Ferhat", 30) || this;
    }
    return kardesPoint;
}(Point));
var Player = new kardesPoint();
Player.x = "Hamza";
console.log(Player.x);
//???????????????????????????????//??????????
//! Protected
var Protec = /** @class */ (function () {
    function Protec(x, y) {
        this.x = x;
        this.y = y;
    }
    return Protec;
}());
var Sirket = /** @class */ (function (_super) {
    __extends(Sirket, _super);
    function Sirket() {
        var _this = _super.call(this, "Gezgin", true) || this;
        _this.x; //! Örnegin buradan this. ile x ve y ye ulasabiliyorken. Bu classin disindan ulasamiyoruz.
        return _this;
    }
    return Sirket;
}(Protec));
var sirket = new Sirket();
//? sirket.x.  burada x ve y´ye ulasamiyoruz!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var Yazar = /** @class */ (function () {
    function Yazar(adi, Kitabi) {
        this.adi = adi;
    }
    Yazar.create = function () {
        var yazar = new Yazar("Bedri Rahmi Eyüpoglu", "Dagdakiler");
        return yazar;
    };
    return Yazar;
}());
var abc = Yazar.create();
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var Yazdir = /** @class */ (function () {
    function Yazdir() {
    }
    Yazdir.prototype.log = function () {
        console.log("Selamlar Bro");
    };
    return Yazdir;
}());
var Bastir = /** @class */ (function (_super) {
    __extends(Bastir, _super);
    function Bastir() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bastir.prototype.log = function () {
    };
    Bastir.prototype.ferhat = function () {
        //? Burada override yazmadigimiz icin bu fonksiyon hata vermiyor. Ama Yazdir classinda böyle bir fonksiyon yok!!!
    };
    return Bastir;
}(Yazdir));
new Bastir().log; //! Bu sekilde 
