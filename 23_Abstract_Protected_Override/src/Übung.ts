abstract class Point{
    constructor(public x: string, public y: number) {

    }
}

class kardesPoint extends Point {
    constructor() {
        super("Ferhat", 30)
    }
}

const Player = new kardesPoint()


Player.x = "Hamza"
console.log(Player.x);


//???????????????????????????????//??????????


//! Protected


class Protec {
    constructor(protected x: string, protected y: boolean) {
        
    }
}

class Sirket extends Protec {
    constructor() {
        super("Gezgin", true)
        this.x  //! Örnegin buradan this. ile x ve y ye ulasabiliyorken. Bu classin disindan ulasamiyoruz.
    }
}

const sirket = new Sirket()

//? sirket.x.  burada x ve y´ye ulasamiyoruz!!!


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

class Yazar {
    private constructor(public adi: string, Kitabi: string) {
        
    }
    static create() {
        const yazar = new Yazar("Bedri Rahmi Eyüpoglu", "Dagdakiler")
        return yazar;
    }
}

const abc = Yazar.create();


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


class Yazdir{
    public log() {
        console.log("Selamlar Bro");     
    }
}

class Bastir extends Yazdir {
    override log() {
        
    }

     ferhat() {
        //? Burada override yazmadigimiz icin bu fonksiyon hata vermiyor. Ama Yazdir classinda böyle bir fonksiyon yok!!!
    }
}

new Bastir().log //! Bu sekilde 


