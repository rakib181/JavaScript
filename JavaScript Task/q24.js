function f(date){
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let d = String(date.getDate()).padStart(2, '0');
    let hour = date.getHours();
    let minute = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${d} ${hour}:${minute} PM`;
}
let date = new Date(2025, 0, 1, 12, 0, 0);
console.log(f(date));