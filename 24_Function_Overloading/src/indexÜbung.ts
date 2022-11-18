function logger22<T extends symbol | string | number>(a: T): T extends string ? Array<unknown> : T extends number ? Map<unknown, unknown> : WeakMap<any, unknown>{
    console.log("2");
    
    return 1 as any
}

logger22("kadir")


function logger32(): void;
function logger32(a: number): number[];
function logger32(a: string): Map<string, unknown>;
function logger32(a?: number | string) {
    if(a == null) {
        return;
    }
    if(typeof a === "number") {
        return [] as number[]
    }
    if (typeof a === "string") {
        return new Map<string, unknown>();
    }
    return;
}

const res2 = logger32(32)

//!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!


function logger23(): void;
function logger23(a: number): number[];
function logger23(a: string): Map<string, unknown>;
function logger23(a?: string | number) {
    if(a == null) {
        return;
    }
    if (typeof a === "number") {
        return [] as number[]
    }
    if (typeof a === "string") {
        return new Map<string, unknown>();
    }
    return;
}


const rew21 = logger23("ferhat")
