function sum (n){
    if(n===1){
        return 1;
    }
    return n + sum(n-1);
}
let result = sum(5)
console.log(result);