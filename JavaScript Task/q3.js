let s = 'I like apple, apple is sweet';

function count(s){
    let word = '';
    let cnt = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == ' ' || s[i] == '.' || s[i] == ','){
            if(word.length > 0){
                cnt++;
            }
            word = '';
        }else{
            word += s[i];
        }
    }
    if(word.length > 0)cnt++;
    return cnt;
}

console.log(count(s));