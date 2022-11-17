//! Google.com da Ts playground yazip gelen editör sayfasinda bu videonun icerini calisabilirsin!

const eventName: `on${"ferhat" | "ahmet" }` = "onferhat"

console.log(eventName);


const beispielName: `on${Capitalize<"update" | "mount">}` = "onUpdate"

console.log(beispielName);

const beispielName2: `on${Uppercase<"fero">}` = "onFERO"

console.log(beispielName2);

const beispielName3: `on${1 | 2}` = "on1"

console.log(beispielName3);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




const obj = {
    name: "Dursun",
    surname: "Ferhat"
}

type ListenerObject<T extends object> = {
    [Key in keyof T as `on${Capitalize<string & Key>}Update`]?: (newValue: T[Key]) => void //! Burada ki ? koymazsak functionu cagirirken obj den sonra birseyler girmeyi zorunlu kiliyor. Hata veriyor.
}

function listen<Obj extends object>(obj: Obj, listeners: ListenerObject<Obj>) { }

listen(obj, {
    onNameUpdate() {
        
    },
    onSurnameUpdate() {
        
    }
})