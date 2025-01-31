let obj1 = {
    "a" : 1,
    "b" : 2,
}
let obj2 = {
    "c" : 3,
    "d" : 4,
}

function f(a, b){
    // let obj = Object.setPrototypeOf(a, b);
    // return obj; 
    let obj = Object.assign({}, a, b);
    return obj;
}

console.log(f(obj1, obj2));