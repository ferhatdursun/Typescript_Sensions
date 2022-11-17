function main(arg: any) {
  if (isArray(arg)) {
  }
}

function isArray(arg: any): arg is any[] {
  if (arg instanceof Array) {
    return true;
  }
  return false;
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

class Person {
  private id: string;

  constructor(public name: string, public surname: string) {
    this.id = Math.random().toString();
  }
}

function main2(arg: any) {
  //! arg´nin person class´indan olusup olusmadigini kontrol etmek icin!!!
  if (arg instanceof Person) {
      arg.name;
      arg
    }
    
}

//! oder

function isPerson(arg: any): arg is Person { //! classlarin type´i kendisidir!!!
    if (arg instanceof Person) {
        return true;
    }
    return false;
}
