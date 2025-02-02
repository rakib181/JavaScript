function inp(v){
    let existing = document.querySelector('.res');
    if(existing.innerHTML.includes('Invalid') || existing.innerHTML.includes('Infinity')){
      existing.innerHTML = '';
    }
    if(existing.innerHTML.length > 29){
      existing.innerHTML = "Invalid Input It's Too Large!";
      return;
    }
    existing.innerHTML = (String(existing.innerHTML) + v);
    if(existing.innerHTML.length == 13){
      existing.innerHTML += '<br>';
    }
}

function del(){
   let existing = document.querySelector('.res');
   let s = existing.innerHTML;
   if(s.length === 0){
     return;
   }
   existing.innerHTML = s.slice(0, -1);
}

function cls(){
   document.querySelector('.res').innerHTML = '';
}


function sol(){
   let existing = document.querySelector('.res');
   let s = existing.innerHTML;
   try{
      let answer =  eval(s.replaceAll('x', '*'));
      existing.innerHTML = answer;
   }catch(e){
        existing.innerHTML = "Invalid Input";
   }
}
