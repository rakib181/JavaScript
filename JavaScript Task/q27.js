function summation(...a){
    return a.reduce((s, value) => s + value, 0);
}
console.log(summation(1, 2, 3, 4, 5));