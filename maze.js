var bounds;

window.onload = function(){
    console.log("Window load");
    //$("boundary1").onmouseover = borderCrossing;
    bounds = $$(".boundary");
    console.log("retrieved bounds" + bounds.length);
    for(var i=0; i<bounds.length; i++) {
        bounds[i].onmouseover = borderCrossing;
        console.log("Setting mouseover" + i);
    }
}

var borderCrossing = function(){
    //$("boundary1").addClassName("youlose");
    //bounds = $$(".boundary");
    for(var i=0; i<bounds.length; i++) {
        bounds[i].addClassName("youlose");
        console.log("add youlose" + i);
    }
}