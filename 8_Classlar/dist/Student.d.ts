export interface IStudent {
    isim: string;
    soyad: string;
    sinif: number;
    getStudentInformation(): {
        isim: IStudent["isim"];
        soyad: IStudent["soyad"];
        sinif: IStudent["sinif"];
    };
}
export declare class Student {
    #private;
    isim: string;
    private nachname;
    private Takim;
    constructor(isim: string, nachname: string);
    yazdir(): void;
}
