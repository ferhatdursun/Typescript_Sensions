//! 4. Videonun devami !!!//

const myObject: { name: string } = {
  name: "Ferhat",
};

//? oder

interface IMyObject {
  name: string;
}

const myObject2: IMyObject = {
  name: "Ferhat",
};

//!!!!!!!!!!!!!!!  Bunlar 4. videonun tekrari olan örnekler

const myObject3: { name: string; channel: string; age: number } = {
  name: "Ferhat",
  channel: "React",
  age: 20,
};

Functionify(myObject3).age();

function Functionify<T extends { [key: string]: any }>(obj: T) {
  type FunctionObject = {
    //? [Key in keyof T] : Key;  Bu sekilde Key´i Key´in kendisine esitlemis oluyoruz.
    [Key in keyof T]: () => T[Key];
  };
  return obj as FunctionObject;
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const Errors = makeEnum(
    "SyntaxError",
    "SpeechError",
    "RutnimeError"
)

Errors.RutnimeError
// makeEnum(
//     "SyntaxError",
//     "SpeechError",
//     "RutnimeError"
//     );
 


function makeEnum<T extends string>(...keys: T[]) {
  type CustomEnum = {
    [Key in T]: number;
  };

 const obj = Object.keys(keys).reduce( (accumulator: CustomEnum, currentNumber: string) => {
    return {
        ...accumulator,
        [keys[Number(currentNumber)]]: currentNumber
    };
 }, {} as CustomEnum); 

return Object.freeze(obj); //! freeze degistirilemez(nur readyonly) yapmak icin.

}