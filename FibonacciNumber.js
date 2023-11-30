function Fibonacci(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    
    let result = Fibonacci(n - 1) + Fibonacci(n - 2);
    return result;
}

for (let i = 0; i <= 5; i++) {
    let a = Fibonacci(i);
    console.log(a);
}
