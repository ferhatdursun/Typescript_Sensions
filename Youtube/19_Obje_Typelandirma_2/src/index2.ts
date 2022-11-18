import { type } from "os";



const myObject22: { name: string; channel: string;  alt:number} = {
    
    name: "Ferhat",

    channel: "Youtube",

    alt: 30,
    
}



function Functionify2<T extends { [key: string]: any }>(obj: T){
    type FunctionObject2 = {
      //![Key in keyof T]: string;  bu bir nevi for döngüsünde ki i gibi. Bu sekilde ki yazimda myObject22.alt yazdigimiz da alt string görünüyor.
      //! Yani for da ki her i yi string yapmis oluyoruz.
        [Key in keyof T]: () => T[Key]; //! Bu sekilde her bir parametre bize kendi type´íni döndürüyor.
    };

    return obj as FunctionObject2;
}

const a = Functionify2(myObject22).alt


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



enum myEnum {

    Error = 0,

    Warning = 1,

    Info = 2
}


type aa = keyof myEnum.Error



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


makeEnum2(
    "SyntaxError",
    "Speecherror",
    "RuntimeError"
)


function makeEnum2<T extends string>(...keys: T[]) {
    type CustomEnum2 = {
        [Key in T]: number;
    };

    // @ts-ignore
    
    return asdf as CustomEnum2
}