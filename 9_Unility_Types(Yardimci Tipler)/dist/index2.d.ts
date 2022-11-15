interface Kisiler {
    firstName: string;
    lastName: string;
    alt: number;
}
declare const Kisi: Omit<Kisiler, "alt">;
declare function yazdir2(fero: {
    isim: string;
    soyisim: string;
}): void;
declare type faso = Parameters<typeof yazdir2>["0"];
declare const ergebnis: faso;
