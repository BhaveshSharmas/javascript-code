function cbb (cb2: (str: string, num:number) => string): string {
    const x = cb2("2",2);
    return "1";
}

function surname(str:string,num:number):string {
    return "1";
}

console.log(cbb(surname));
