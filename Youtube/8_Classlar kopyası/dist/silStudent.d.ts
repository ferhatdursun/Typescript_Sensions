export interface IStudentlist {
    benimAdim: string;
    benimSoyadim: string;
    benimYasim: number;
    getirBeni(): {
        benimvorname: IStudentlist["benimAdim"];
        benimnachname: IStudentlist["benimSoyadim"];
        benimalt: IStudentlist["benimYasim"];
    };
}
export declare class sonStudent implements IStudentlist {
    benimAdim: string;
    benimSoyadim: string;
    benimYasim: number;
    constructor(//? Burasi interface ile ayni olmak zorunda
    benimAdim: string, benimSoyadim: string, benimYasim: number);
    getirBeni(): {
        benimvorname: string;
        benimnachname: string;
        benimalt: number;
    };
}
