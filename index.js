var div=document.getElementById("canvas");
var painting=false;
div.onmousedown=function(e){
    painting=true;
    var x=e.clientX;
    var y=e.clientY;
    var divA=document.createElement("div");
    divA.style="width:6px;height:6px;"+
    "background:black;border-radius:3px;"+
    "position:absolute;left:"+(x-3)+"px;"+
    "top:"+(y-3)+"px;";
    div.appendChild(divA);

};

div.onmousemove=function(e){
    if(!painting) return;
    var x=e.clientX;
    var y=e.clientY;
    var divA=document.createElement("div");
    divA.style="width:6px;height:6px;"+
    "background:black;border-radius:3px;"+
    "position:absolute;left:"+(x-3)+"px;"+
    "top:"+(y-3)+"px;";
    div.appendChild(divA);

};

div.onmouseup=function(e){
    painting=false;
}