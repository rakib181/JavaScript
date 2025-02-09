window.addEventListener('load', (event) => {
      console.log(event);
      if(event.isTrusted){
        alert('Loading page !');
        document.querySelectorAll('.hidden').forEach(element => {
                    element.style.display = "block";
        });
      }
});