//! abstractlar ile new adinda classlar olusturamiyoruz!!!
//! ama abstract classlari extends yapabiliyoruz!!!!

abstract class Departmen {
    constructor(public name: string) { }
    
    abstract printMeeting(): void; //! abstract classin icinde bunun gibi yeniden tanimladigimiz her abstract metodu class accountingDepartment icinde de kullanmak zorundayim!!!

    printName(): void {//! abstract olmayan normal bir function tanimladigimiz da ise bunu accountingDepartment icinde kullanmak zorunda degiliz!!! abstract yapida olmadigi icin!!!!
        console.log("Department name:" + this.name); 
        
    }
}


class accountingDepartment extends Departmen {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting(): void{
        console.log("The Accounting Department meets each Monday at 10 am.");
    }

    generateReport(): void { //! Burada tanimladigimiz yeni functionlarin class Departmen icinde de tanimlanmasi GEREKMIYOR!!!
        console.log("Generating accounting reports..."); 
        
    }
}

let department = new accountingDepartment();
department.printName() //! Burada ilk olarak printName console.log kismi calisiyor var Department name geliyo. Sonrasinda this.name. Burda ki name bize class Department ve onun constructor dan geliyor. constructor ise bunu superden aliyor.

//? let department2 = new Departmen() abstractlarin new Class'i alinamiyor.