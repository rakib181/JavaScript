let elem = document.getElementsByTagName('div');
    for(let i = 0; i < elem.length; i++){
        elem[i].setAttribute('data-user', i);
    }