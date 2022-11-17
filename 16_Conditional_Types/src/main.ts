const c = null;

const a = c ? 5 : 10; //! Tek satirlik kosul!  C true ise a=10, c null ise a= 5

console.log();


type ToArray<T> = T[];

type C = ToArray<number>;

//! T[]´nin devaminda array(dizi) sembolü oldugu oldugu icin C´nin type da number[] olarak görünüyor.



//? Soru; Sadece number´i, string´i ve boolean´i nasil diziye cevirebiliriz?

type tooArray<T extends string | number | boolean> = T[]; //! Bu sekilde yapilabilir!

type FD = tooArray<string>; //! Buraya sadece string, number, boolean type´i yazilabilir.



//!!!!!!!!! Soru > Kosullu Typelandirma nasil yapilir?

type tooArray3<T> = T extends string | number | boolean ? T[] : never; //! Türüyor ise bana T[] döndür. Türümüyorsa never döndürme.

type örnek3 = tooArray3<string | number> //! Burada string ve number yerine sadece 1 tane [] yazarsak let R:örnek3 oldugunda R. yapinca hicbirsey gelmez. 


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

class Robot {
  genId = "Istanbul";
}

class Human {
  tcId = 123124123;
}

class Ferhat {

}

type GetIdentifier<T> = T extends Human ? T["tcId"] : T extends Robot ? T["genId"] : never;
//! T Human´dan olustuysa tcId´yi döndür. T Robot´dan olusturulduysa genId´yi döndür. Ikisi de degilse never döndür.

type ID = GetIdentifier<Robot>; //! Burada Robot yazdigi icin type ID string. Human yazarsa number olur.



function getIdentifier<T>(param: T): GetIdentifier<T> {
  if(param instanceof Human) {
    //! if param Humandan türediyse demek instanceof
    return param.tcId as GetIdentifier<T>;
  }
  if(param instanceof Robot) {
    return param.genId as GetIdentifier<T>;
  }
  throw new Error("param is not supported instance");
}


const human = new Human();

const robot = new Robot();

const ahmet = new Ferhat() //! Burada ki new´in olayi, yukarida tanimlanmis olan Ferhat classina ulasabilmek icin kullanilmasi.


const id = getIdentifier(human); //! Burada id´nin type´i number. Cünkü class human icinde ki tcid´nin type´ number.

//?????????????????????????????????????????????


type MessageOf<T> = T extends {message: unknown} ? T["message"] : never;

const myMessage = {
  message: "eve gel"
};

type message = MessageOf<typeof myMessage>; //! window verirsek message never döndürüyor.




