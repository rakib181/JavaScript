function f(date){
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let d = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${d}`;
}
let date = new Date();
console.log(f(date));