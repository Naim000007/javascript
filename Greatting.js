function Greating( n ){
    if (n==0) return 0;
    Greating(n-1)
    console.log(`${n} good morning naim sheikh`);
    return
}
let a = Greating(5)