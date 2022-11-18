"use strict";
//! Büyük ekipler ile çalışırken, Backend ve API üzerinden veriler ile çalışırken Dinamik Tip (Dynamic Typing) bir dil geliştirmeler sırasında esnekliğinden dolayı birçok hataya yol açabilir. Bu nedenle çok dikkatli kullanılması gerekir.
//! Büyük projelerde herkesin bu dikkati gösterMemesi, projeye sonradan dahil olan, veya JS konularına hakim olmayan geliştiricilerin projede oluşturabilecekleri hataları minimize etmek için TypeScript gibi Type güvenliği sağlayan diller kullanırız.
//! Bundan dolayı araya bir katman daha koyarak geliştirdiğimiz kodumuzun transpile edilmesi ve yazdığımız JS kodlarında oluşacak hataları daha öncesinden tespit etmiş oluruz. Bu aşamada JS dışındaki dilleri → JS diline dönüştürecek ara transpiler ihtiyaç bulunur. Bunlardan bazıları;
//! Basitçe TypeScript kodun daha anlaşılır olması ve hataların engellenmesi için öncesinden değişkenlere verdiğimiz tip değerlerine göre kodun denetlenmesi ve kullanıcının uyarılmasını sağlayan mekanizmadır.
//? npm init --y ile package.json dosyasi geliyor.
//! tsc --project tsconfig.json komutunu terminalden calistirarak index.ts icerisine yazdigimiz kodlari disk klasörünü ve index.js' file olusturup icerisine yaziyor. Ama her yeni birsey ekledigimizde bu kodu terminalden tekrar calistirmamiz gerekmektedir. Hangi dosyanin icerisine olusturmasi gerektigini ise tsconfig.json icerisinde ki outDir ile belirliyoruz.
//? node dist/index.js bu kod ile index.js'in icinde yazanlari terminalde görebiliriz.
const a = 33;
console.log({ a });
//! Typescript ile degisken yazarken ona Type(const, let) vermeye gerek yok. Typescript bunu kendisi otamatik olarak yapiyor.
let myname = "asda";
//! Variablelarda iki nokta üst üste Type tanimlamadir.
//? string ile number arasinda ki | yada demektir.
myname = "qwe";
myname = 23;
//? myname yukarida ilk önce sadece string olarak tanimlandiginda burada ki myname=23 hata veriyor.
let name = "asdsd";
function change() {
    name = "asd";
    name = 12;
}
function check() {
    if (typeof name === "string") {
        name.toUpperCase;
    }
}
const c = undefined;
