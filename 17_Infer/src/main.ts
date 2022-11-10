function myFunction(a: number, b: string, c: boolean) {
    return 100;
}

//! spread syntax für ...
type ReturnT<T> = T extends (...args: any[]) => infer C ? C: never;
//? ilk satırda bir tür belirledik ve bu türün array tipinden mi türetildiğini kontrol ettik.
//? Infer keywordu ile eğer arrayden türetildi ise o türü, türetilmedi ise never türünü döndürüyoruz.


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

type FirstParameterType<T extends (...arg: any[]) => any> = T extends (
    firstArg: infer F,

    ...args: any[]

) => unknown

    ? F
    
    : never;


type MyFunctionFirstParameter = FirstParameterType<typeof myFunction>;
//! MyFunctionFirstParameter; Yukarida ki myFunction icinde ki ilk argümanin typeni aliyor.
//! Yani a:number ise MyFunctionFirstParameter: number, a: string ise MyFunctionFirstParameter:string oluyor.

