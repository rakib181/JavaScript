function numberOfDays(d1, d2){
    let diff = Math.abs(d1 - d2);
    return Math.ceil(diff / (24 * 60 * 60 * 1000));
}
let d1 = new Date(2025,1,1);
let d2 = new Date(2025,12,31);
console.log(numberOfDays(d1, d2));