console.log("Typescriptsssss");
//! Eger bir degiskenin degerini Program icerisinde degistireceksem let kullaniyorum,
//! degistirmeyeceksem const ile tanimliyorum.
let age: number = 30;
let name2: string = "Ferhat"
let soyisim: string = "Dursun"
console.log(name2);

let isimSoyisim: string = `Benim adim ${name2}, soyadim ${soyisim}`
console.log(isimSoyisim);


function display(id: any, name: string) {
    console.log("id = " + id + ", Name =" + name);   
}


let firstNames: (string| number)[] = ["Ferhat", "Dursun", "Serafettin", 20]

