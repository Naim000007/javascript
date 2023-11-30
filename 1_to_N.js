function onetoN(n){
    if(n==0) return 0;
    onetoN(n-1);
    console.log(n);

}
let a = onetoN(5);
// console.log(a)