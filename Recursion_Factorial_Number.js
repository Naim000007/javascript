function Factorial_Number(n){
    if(n<0 ) {
        console.log(`error this number ${n}`);
        return;
    }
    if (n==0 || n == 1) return 1;
    let result= n * Factorial_Number(n-1);
    // console.log(a);
    return result;
}
let number = Factorial_Number(5)
console.log(number);