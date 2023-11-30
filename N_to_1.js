function onetoN(n){
    if(n==0) return 0;
    console.log(n);
    onetoN(n-1);
}
let a = onetoN(5);
// console.log(a)