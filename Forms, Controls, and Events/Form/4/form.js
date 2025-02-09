let text = document.getElementById('newText');
let cnt = 0;
function fun(c){
     if(c.data != ' '){
        cnt++;
     }
    document.getElementById('dis').innerText = cnt;
}