var bounds;
var hit;

window.onload = function(){
    console.log("Window load");
    //$("boundary1").onmouseover = borderCrossing;
    hit = false;
    bounds = $$(".boundary");
    console.log("retrieved bounds" + bounds.length);
    for(var i=0; i<bounds.length; i++) {
        bounds[i].onmouseover = borderCrossing;
        console.log("Setting mouseover" + i);
    }
    $("end").onmouseover = endHandler;
    $("start").onmousedown = startHandler;
};

var borderCrossing = function(){
    //$("boundary1").addClassName("youlose");
    //bounds = $$(".boundary");
    hit = true;
    for(var i=0; i<bounds.length; i++) {
        bounds[i].addClassName("youlose");
        console.log("add youlose" + i);
    }
};

var endHandler = function(){
    if(hit === false){
        alert("You Win!");
    } else {
        alert("Sorry, you lost.");
    }
};

var startHandler = function(){
    console.log("Reset hit");
    hit = false;
    for(var i=0; i<bounds.length; i++){
        console.log("reset bounds" + i);
        bounds[i].removeClassName("youlose");
    }
};