function logger<T extends string | number | symbol>(
  a: T
): T extends string
  ? Array<unknown>
  : T extends number
  ? Map<unknown, unknown>
  : WeakMap<any, unknown> {
  console.log("2");

  return 1 as any;
}
logger("fer");
//! Burada logger icinde ne cagirilirsa(number, string oder Symbol) function logger ona göre islem yapiyo.
//! Deger verdikten sonra logger´in üstüne gelerek görebilirsin.
//! Yani bir nevi dinamik bir yapi olusturduk!

//?????????????????????????????????????????????????????????????????????

// interface Logger {
//     logger2(): void;
//     logger2(a: number): number[];
//     logger2(a: string): Map<string, unknown>;
//     logger2<T>(a: T[], map?: (el: T) => void): void;

// Bu sekilde interfaceler ile de overloading yapilabilir.
// }

//! ODER

function logger2(): void;
function logger2(a: number): number[];
function logger2<T>(a: T[], map?: (el: T) => void): void; //!   ? isaretiyle map´i optional yaptik!!!
function logger2<T>(a?: number | string | T[], map?: (item: T) => void) {
    if (a == null) {
      return;
    }
    if (typeof a === "number") {
      return [] as number[];
    }
    if (typeof a === "string") {
      return new Map<string, unknown>();
    }
    if (Array.isArray(a)) {
      a.forEach((item) => map?.(item));
    }
    return;
  }

logger2(2);
const res = logger2(["kadir", "1", "2", true], (item) => {
  //! suan ki durum da item: string | boolean degeri aliyor.
});

//! looger2´nin icini bos biraktigimda void yani undefined oluyor.
//! 123 verirsek logger2 number oluyor. String deger verirsek, logger string oluyor.
//! Buraya(logger2) hicbirsey vermezsek void, number verirsek number döndüren bir fonksiyonumuz var.

//?????????????????????????????? Claslar ile Overloading yapma

class Logger {
    logger3(): void;
    logger3(a: number): number[];
    logger3(a: string): Map<string, unknown>;
    logger3<T>(a: T[], map?: (el: T) => void): void;
    logger3<T>(a?: number | string | T[], map?: (item: T) => void) {
        if (a == null) {
            return;
        }
        if (typeof a === "number") {
            return [] as number[];
        }
        if (typeof a === "string") {
            return new Map<string, unknown>();
        }
        if (Array.isArray(a)) {
            a.forEach((item) => map?.(item));
        }
        return;
    }
}