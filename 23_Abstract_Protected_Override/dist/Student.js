"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Student_memleket, _Student_yemek;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(isim, nachname) {
        this.isim = "ferhat"; //! Burada ki isim publictir. Public yazmaya gerek yok. Yani diger sayfalarda import edilirse o sayfada da kullanilabilir.
        this.nachname = "Dursun"; //! Burada ki nachname basinda public ve birsey yazmadigi sürece publictir. Ama suanda private. Yani diger sayfalardan buraya ulasilamaz.
        _Student_memleket.set(this, "Dortmund"); //! Ama memlekete ulasilamiyor cünkü #memleket olarak tanimlanmistir.
        //? Burada memleketi public yapamayiz cünkü zaten #. Ama static yapabiliriz.
        //? ve basinda # olanlara sadece class icerisinden erisilebiliniyor. class disindan erisilemiyor.
        this.Takim = "Besiktas"; //! static`in özelligi ise class disindan direkt olarak ulasilabiliniyo olmasi.
        console.log(__classPrivateFieldGet(this, _Student_memleket, "f"));
        this.isim; //! Burada ki this ile kast edilen Student class´i ve bu this ile class icinde tanimlananlara ulasabiliyoruz.
        this.nachname;
        __classPrivateFieldGet(Student, _a, "f", _Student_yemek); //! static olanlara class icerisinde bu sekilde ulasilabilinir.
    }
    yazdir() {
        console.log({
            isim: this.isim,
            nachname: this.nachname,
            Takim: this.Takim,
        });
    }
}
exports.Student = Student;
_a = Student, _Student_memleket = new WeakMap();
_Student_yemek = { value: "Musakka" };
// export class Araba {
//     public marka: string;
//     public rengi: string;
//     constructor(marka: string, rengi: string){
//         this.marka = marka;
//         this.rengi = rengi;
//     }
//     yazdir() {
//         console.log({
//             marka: this.marka,
//             rengi: this.rengi,
//         });
//     }
//}
