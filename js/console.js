var message = document.getElementById("message"),
    insert = document.getElementById("code"),
    terminal = document.getElementById("terminal"),
    maxMsg = 200,
    tab = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&not;&nbsp;&nbsp;",
    code = new Array();


write("Magnhetic.fr [ version 2.1.1337 ] © 2015 Remi Wetteren Corporation. All right reserved.");
write("Write 'help' to show commands.");
write("<br>");

function write(msg){
    message.innerHTML = "";
    code.push(msg);
    if(code.length>maxMsg){
        code.splice(0,(code.length-maxMsg));
    }
    for(var i=0; i<code.length;i++){
        var newMsg = document.createElement("li");
        newMsg.innerHTML = code[i];
        message.appendChild(newMsg);
    }
    message.scrollTop = message.scrollHeight;
}

function capture(){
    debugger;
    cmd = insert.value;
    write("> " + cmd);
    insert.value = "";
    switch(cmd){
            //IF UNKNOW
        default :
            write("'" + cmd + "' is not recognized as an internship or externship command, a programm or a command's file.");
            break;
            //HELP
        case "help":
            write("Command exemple : download CV");
            write("<br>");
            write("- download ");
            write(tab +"terminal : Download this terminal and custom it");
            write(tab +"CV : My CV in pdf");
            write("- clear : Clear logs");
            break;
            
        //CLEAR
        case "clear":
            code = new Array();
            insert.value ="";
            message.innerHTML = "";
            break;
            
        //DOWNLOAD
        case "download  terminal":
            window.open("http://magnhetic.fr/download/terminal.zip", '_blank', null);
            break;
        case "download CV":
            window.open("http://magnhetic.fr/download/CV.pdf", '_blank', null);
            break;

        //AUTRES COMMANDES
        case "key word":
            //new instruction
            break;
        
    }
    write("<br>");
    return false;
}


//DRAGGABLE
window.onload = function(){
    draggable('bar');
};
var posx = 0;
var posy = 0;

var dragObj = null;
function draggable(id)
{
    var obj = document.getElementById(id);
    obj.style.position = "absolute";
    obj.onmousedown = function(e){
        dragObj = obj;
        posx = parseInt(obj.style.left, 10) - e.pageX ;
        posy = parseInt(obj.style.top, 10) - e.pageY;
    }
}

document.onmouseup = function(e){
    dragObj = null;
};

document.onmousemove = function(e){
    var y = e.pageY;
    var x = e.pageX;
    if(!posx){
        posx = -x/3;
        posy = -y+20;
    }

    if(dragObj == null)
        return;

    dragObj.style.left = x + posx +"px";
    dragObj.style.top= y + posy +"px";
};


echo(mon_tableau[1]);