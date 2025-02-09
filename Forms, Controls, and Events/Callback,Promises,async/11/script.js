function sum(a, b){
    return a + b;
}


function calculate(a, b, callback){
    return callback(a, b);
}

console.log(calculate(5, 3, sum));