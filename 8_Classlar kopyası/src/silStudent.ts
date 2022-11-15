export interface IStudentlist{
    benimAdim: string;
    
    benimSoyadim: string;

    benimYasim: number;

    getirBeni(): {
        benimvorname: IStudentlist["benimAdim"]

        benimnachname: IStudentlist["benimSoyadim"]

        benimalt: IStudentlist["benimYasim"]
    }
}

export class sonStudent implements IStudentlist {
    constructor( //? Burasi interface ile ayni olmak zorunda
        public benimAdim: string,
        public benimSoyadim: string,
        public benimYasim: number
    ) { }
    getirBeni() {
        return {
          benimvorname: this.benimAdim, //! benimvorname kismi, getirBeni() fonksiyonundakilerden secilmek zorunda.
          benimnachname: this.benimSoyadim, //! Ama this.den sonra ki kisim constructor da yazilanlardan eklenmek zorunda!!!
          benimalt: this.benimYasim,
        };
     }
}