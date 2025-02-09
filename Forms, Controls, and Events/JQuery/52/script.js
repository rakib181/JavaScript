$('.box1').hover(function(){
    if($('.box2').hasClass('hidden')){
        $('.box2').removeClass('hidden');
   }else{
        $('.box2').addClass('hidden');
   }
});

$('.box2').hover(function(){
   if($('.box1').hasClass('hidden')){
        $('.box1').removeClass('hidden');
   }else{
        $('.box1').addClass('hidden');
   }
});