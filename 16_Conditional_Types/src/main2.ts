type ToArray2<T> = T extends string | number | boolean ? T[] : never;

type ceylan = ToArray2<[]>;

type kaplan = ToArray2<[]>;

class Robot2 {
  genId2 = "asdad123";
}

class Human2 {
  tcId2 = 123124123123;
}

type GetIdentifier2<T> = T extends Human2
  ? T["tcId2"]
  : T extends Robot2
  ? T["genId2"]
  : never;

function getIdentifier2<T>(param2: T): GetIdentifier2<T> {
  if (param2 instanceof Human2) {
    return <GetIdentifier2<T> >param2.tcId2;
  }
  if (param2 instanceof Robot2) {
    return <GetIdentifier2<T> > param2.genId2;
  }

  throw new Error("param is not supported instance");
}

const human2 = new Human2();

const robot2 = new Robot2();

const value = 123123;

const id2 = getIdentifier2(robot2); //! buraya value yazarsak bize never döndürecektir!!! Cünkü yukarida kosullar koyduk!!!



type mesaj<T> = T extends { message: unknown } ? T["message"] : never;

const benimMesajim = {
    message: "Selamlar Bro"
} as const