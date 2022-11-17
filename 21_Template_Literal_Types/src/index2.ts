const obj2 = {
    name: "Dursun",
    surname: "Ferhat"
}

type ListenerObject2<T extends object> = {
    [Key in keyof T as `on${Capitalize<string & Key>}Update`]?: (newValue: T[Key]) => void
}


function listen2<Obj extends object>(obj: Obj, listeners: ListenerObject2<Obj>) { }

listen(obj, {

})