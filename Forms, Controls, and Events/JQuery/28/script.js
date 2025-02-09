let s = "";
$('#text').on('input', (event) => {
     s += event.originalEvent.data;
});


$('#text').keydown(function(event){
     if(event.key == 'Enter'){
        console.log(s);
     }
});