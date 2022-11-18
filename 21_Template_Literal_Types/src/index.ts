//! Google.com da Ts playground yazip gelen editör sayfasinda bu videonun icerini calisabilirsin!

const eventName: `on${"ferhat" | "ahmet"}` = "onferhat";

console.log(eventName);

const beispielName: `on${Capitalize<"update" | "mount">}` = "onUpdate";

console.log(beispielName);

const beispielName2: `on${Uppercase<"fero">}` = "onFERO";

console.log(beispielName2);

const beispielName3: `on${1 | 2}` = "on1";

console.log(beispielName3);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const obj = {
  name: "Dursun",
  surname: "Ferhat",
};

type ListenerObject<T extends object> = {
  [Key in keyof T as `on${Capitalize<string & Key>}Update`]?: (
    newValue: T[Key]
  ) => any; //! Burada ki ? koymazsak functionu cagirirken obj den sonra birseyler girmeyi zorunlu kiliyor. Hata veriyor.
};

function createListenableObject<Obj extends object>(
  obj: Obj,
  listeners?: ListenerObject<Obj>
): Obj {
  return new Proxy(obj, {
    set(target, property, newValue, receiver) {
      if (listeners) {
        if (typeof property === "string") {
          const capitalizedPropertyName =
            property[0].toUpperCase() + property.slice(1);
          // @ts-ignore
          if (listeners[`on${capitalizedPropertyName}Update`]) {
          // @ts-ignore
            listeners[`on${capitalizedPropertyName}Update`](newValue);
          }
        }
      }
      console.log({
        arguments: [...arguments]
      });
      
      return Reflect.set(target, property, newValue, receiver); //! Reflectin yansitma özelligi var!!!
    },
  });
}

const newObject = createListenableObject(obj, {
  onNameUpdate: (newValue) => {},
});

setTimeout(() => {
  newObject.name = "Ahmet";
}, 3000);

type camelCase<Str extends string> = Str extends `${infer FirstCharacter}${infer Tail}` ? `ilk Karakter: ${FirstCharacter}, sonraki Karakterler: ${Tail}` : never

type A = camelCase<"Ferhat">



