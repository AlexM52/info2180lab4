"user strict";
var bounds;             //Var declarations
var hit;

window.onload = function(){
    //console.log("Window load");                           //DEBUGGING MSG
    //$("boundary1").onmouseover = borderCrossing;                  //Old code (Exercise 1)
    hit = false;                                                                                    //Vars initialized
    bounds = $$(".boundary");
    //console.log("retrieved bounds" + bounds.length);      //DEBUGGING MSG
    for(var i=0; i<bounds.length; i++) {                                                            //Set up border handler..
        bounds[i].onmouseover = borderCrossing;
        //console.log("Setting mouseover" + i);             //DEBUGGING
    }
    $("end").onmouseover = endHandler;                                                              //..end square handler..
    $("start").onmousedown = startHandler;                                                          //..and start square handler
};

var borderCrossing = function(){                                                                    //border handler defined
    //$("boundary1").addClassName("youlose");                       //Old code (Exercise 1)
    //bounds = $$(".boundary");                                     //Unused after Ex.1 ...
    hit = true;
    for(var i=0; i<bounds.length; i++) {
        bounds[i].addClassName("youlose");
        $("status").update("Click 'S' to reset");
        //console.log("add youlose" + i);                   //DEBUGGING
    }
};

var endHandler = function(){                                                                        //end handler..
    if(hit === false){
        //alert("You Win!");
        $("status").update("You Win!");
    } else {
        //alert("Sorry, you lost.");
        $("status").update("Sorry, you lost. Click 'S' to reset.");
    }
};

var startHandler = function(){                                                                      //start handler..
    //console.log("Reset hit");                             //DEBUGGING
    hit = false;
    for(var i=0; i<bounds.length; i++){
        //console.log("reset bounds" + i);                  //DEBUGGING
        bounds[i].removeClassName("youlose");
    }
    $("status").update("Maze reset. Try Again!");
};