export interface IStudent {
    isim: string;

    soyad: string;

    sinif: number;

    getStudentInformation(): {
        isim: IStudent["isim"];

        soyad: IStudent["soyad"];

        sinif: IStudent["sinif"];
    }
}

export class Student{
    public isim = "ferhat" //! Burada ki isim publictir. Public yazmaya gerek yok. Yani diger sayfalarda import edilirse o sayfada da kullanilabilir.
    private nachname = "Dursun" //! Burada ki nachname basinda public ve birsey yazmadigi sürece publictir. Ama suanda private. Yani diger sayfalardan buraya ulasilamaz.
    #memleket = "Dortmund"; //! Ama memlekete ulasilamiyor cünkü #memleket olarak tanimlanmistir.
    //? Burada memleketi public yapamayiz cünkü zaten #. Ama static yapabiliriz.
    //? ve basinda # olanlara sadece class icerisinden erisilebiliniyor. class disindan erisilemiyor.
    private Takim = "Besiktas" //! static`in özelligi ise class disindan direkt olarak ulasilabiliniyo olmasi.
    static #yemek= "Musakka"
        constructor(isim:string, nachname:string){ //? staticler constructor icinde tanimlanamaz. Class"in hemen altinda tanimlanir.
        console.log(this.#memleket);
        this.isim; //! Burada ki this ile kast edilen Student class´i ve bu this ile class icinde tanimlananlara ulasabiliyoruz.
        this.nachname;
        Student.#yemek //! static olanlara class icerisinde bu sekilde ulasilabilinir.
     }
     yazdir(){
        console.log({
            isim: this.isim,
            nachname: this.nachname,
            Takim: this.Takim,
        });

     }
}






interface IAraba {
    marka: string;

    rengi: string;

    getArabaInformation():{
        marka: IAraba["marka"];

        rengi: IAraba["rengi"];
    }
}



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