function count(){
    let cnt = 0;
    function f(){
        cnt++;
        return f;
    }
    f.toString = () => {
        return cnt;
    }
    return f;
}

let cnt = count();
alert(cnt()()());