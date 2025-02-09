let myForm = document.forms.form;

myForm.addEventListener("submit", function (event){
     let isValid = true;
    if(this.elements.username.value == ''){
        isValid = false;
        document.getElementById('name').innerHTML = 'please enter a name';
    }else if(!this.elements.email.value.includes('@')){
        isValid = false;
        document.getElementById('email').innerHTML = 'please enter a email';
    }else if(this.elements.password.value == ''){
        isValid = false;
        document.getElementById('pass').innerHTML = 'please enter a password';
    }
    if(!isValid){
        event.preventDefault();
    }
 });