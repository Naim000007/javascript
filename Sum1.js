function sum(n, s){
    if (n==0) return ;
    sum(n-1, s+n);
    return
}
console.log(sum(5, 0)); // 15