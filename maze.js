window.onload = function(){
    $("boundary1").onmouseover = borderCrossing;
}

var borderCrossing = function(){
    $("boundary1").addClassName("youlose");
}