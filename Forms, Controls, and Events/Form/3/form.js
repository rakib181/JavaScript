function fun(){
    let select = document.forms.myForm.sel;
    let dis = document.getElementById('response');
    dis.innerHTML = "";
    if(select.value != ''){
        dis.innerHTML = select.options[select.selectedIndex].innerHTML + " is selected";
    }else{
        dis.innerHTML = "nothing selected";
    }
}
