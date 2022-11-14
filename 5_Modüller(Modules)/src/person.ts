export default class Person {
    static isim = "Ferhat" //! static degerlere baska sayfalarda cagirdimizda dogrudan erisebiliriz!
}
//! Bu sayfadan herhagngi bir import oldugunda sayfanin geri kalanida otomatikman calismaya basliyor.



export const sayi = 5


//! Her sayfada sadece bir tane default kullanilabilir!

export type Student = {
    isim: string;

    sinif: number;
}


 