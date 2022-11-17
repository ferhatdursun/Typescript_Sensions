function benimFunction2(a:boolean, b: string, c: boolean) {
    return 100;
}


type FirstParameterType2<T extends (...args: any[]) => unknown> = T extends (
    firstArg: infer F,
    ...args: any[]
) => unknown
    ? F
    : never;

type benimilkparametrem = FirstParameterType2<typeof benimFunction2>