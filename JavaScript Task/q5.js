function fun(s){
    let ans = s.split(' ');
    s = '';
    for(let i = ans.length - 1; i >= 0; i--){
        s += ans[i];
        s += ' ';
    }
    return s;
}

s = fun(s);
console.log(s);