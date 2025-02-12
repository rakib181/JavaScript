
let div = $(".box");
let ml = 0, mt = 0;
let height = window.innerHeight;
let width = window.innerWidth;
console.log(height);
console.log(width);
let Top = false, Bottom = false, Left = true, Right = false;
function move(x, y){
    if(x > 0){
        ml = Math.min(ml + x, width);
    }else{
        ml = Math.max(ml + x, 0);
    }
    if(y > 0){
        mt = Math.min(mt + y, height)
    }else{
        mt = Math.max(mt + y, 0);
    }
    $("div").css({ 
        "margin-top": `${mt}px`,
        "margin-left": `${ml}px`
    });
    if(ml >= width){
        Left = false;
        Top = false;
        Bottom = false;
        Right = true;
    }else if(mt >= height){
        Left = false;
        Top = false;
        Bottom = true;
        Right = false;
    }else if(ml <= 0){
        Left = true;
        Top = false;
        Bottom = false;
        Right = false;
    }else if(mt <= 0){
        Left = false;
        Top = true;
        Bottom = false;
        Right = false;
    }
    
}
let setTime = setInterval(() => {
    console.log(Left);
    console.log(Right);
    console.log(Top);
    console.log(Bottom);
   if(Left) {
      move(+10, +10);
   }else if(Right){
      move(-10, -10);
   }else if(Bottom){
      move(+40, -10);
   }else{
      move(-40, +10);
   }
}, 1000);
