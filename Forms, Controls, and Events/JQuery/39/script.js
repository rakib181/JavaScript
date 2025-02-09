let div1 = $("#div1");
let div2 = $("#div2");

let temp = $("<div></div>").insertBefore(div1);

div1.insertBefore(div2);
div2.insertBefore(temp);

temp.remove();
