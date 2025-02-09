let form = document.forms.myForm;
let dom = document.getElementById('msg');

let s = "";

function fun(e){
    if(e.data === null){
        s = s.slice(0, -1);
    }else{
       s += e.data;
    }
    if(s.indexOf('@') != -1){
        if(dom.classList.contains('invalid')){
            dom.classList.remove('invalid');
        }
        if(!dom.classList.contains('valid')){
            dom.innerText = 'This email is valid';
            dom.classList.add('valid');
        }
    }else{
        if(dom.classList.contains('valid')){
            dom.classList.remove('valid');
        }
        if(!dom.classList.contains('invalid')){
           dom.innerText = 'This email is invalid';
           dom.classList.add('invalid');
        }
    }
}