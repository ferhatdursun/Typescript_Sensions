"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sonStudent = void 0;
class sonStudent {
    constructor(//? Burasi interface ile ayni olmak zorunda
    benimAdim, benimSoyadim, benimYasim) {
        this.benimAdim = benimAdim;
        this.benimSoyadim = benimSoyadim;
        this.benimYasim = benimYasim;
    }
    getirBeni() {
        return {
            benimvorname: this.benimAdim,
            benimnachname: this.benimSoyadim,
            benimalt: this.benimYasim,
        };
    }
}
exports.sonStudent = sonStudent;
