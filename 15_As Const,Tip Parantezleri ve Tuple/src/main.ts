const myArray: [number, string] = [25, "kadir"];

const myObject: {
  name: "Ferhat";
  age: 30;
  information: {
    email: "somet@gmail.com";
  };
} = {
  name: "Ferhat",
  age: 30,
  information: {
    email: "somet@gmail.com",
  },
};

myObject.name = "Ferhat" //! Burada name´i sadece Ferhat olarak yazabiliriz. Cünkü yukarida bu sekilde tanimlama yaptik.



//??????????????????????????????????????????????????????????????????????????????????????????



const degismez = Object.freeze([25, "kadir"]); //! Sadece readonly dir. Deswegen degistirilemez. Icine birsey pushlanamaz.



const Dize = [25, "kadir"] as const; //? as const dan dolayi bu artik bir degismezdir. Ve bu bir tupledir.

    const Dize2 = <const>[25, "kadir"]; //! Yukarida ki Dize tuple´i bu sekilde de tanimlanabilir.

function isExisting<T extends any[] | readonly any[]>(array: T, child: any): [boolean, number] { //! Burada :[boolean, number] yazdigim icin isExisting type olarak sadece bu ikisinden türetilebilir.
    const index = array.findIndex((value) => value === child); //? child valuenin icinde varsa, childden index numarasini bulucaz. Child valuenin icinde yoksa, bize -1 döndürecek.
    if(index > -1) {
        return [true, index]
    }

    return [false, index];
}

const [existing, index] = isExisting(myArray, 25)
