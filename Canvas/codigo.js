var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function desenharRetangulos(color,x,y, largura, altura){
    ctx.fillStyle = color;
    ctx.fillRect(x,y, largura, altura)
}
function desenharLinha(x1,y1,x2,y2,color){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle= color
    ctx.stroke();
}
function desenharArcos(x,y,tamanho, start,end,preenchimento,linha){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle= preenchimento
    ctx.strokeStyle = linha
    ctx.arc(x, y, tamanho, start, end * Math.PI);
    ctx.stroke();
    ctx.fill()
}

function escrever(texto,fonte,x,y){
    ctx.font = fonte;
    ctx.fillText(texto, x, y);
}

//texto
escrever("Canvas","20px Georgia",110,50)
//retangulos
desenharRetangulos("blue",0,0,50,50);
desenharRetangulos("red",250,0,50,50);
desenharRetangulos("DeepSkyBlue",260,130,40,40);
desenharRetangulos("black",260,260,40,40);
desenharRetangulos("black",260,220,40,40);
desenharRetangulos("black",220,260,40,40);
desenharRetangulos("yellow",0,260,40,40);
desenharRetangulos("yellow",0,220,40,40);
desenharRetangulos("yellow",40,260,40,40);
desenharRetangulos("DeepSkyBlue",0,150,40,40);
desenharRetangulos("DeepSkyBlue",0,110,40,40);
desenharRetangulos("red",110,150,40,40);

//linhas
desenharLinha(0,150,300,150,"green");
desenharLinha(150,150,150,260,"LightSlateGray");
desenharLinha(50,50,150,150,"blue");
desenharLinha(250,50,150,150,"red");

//arcos(x,y,tamanho, start,end,preenchimento,linha)
desenharArcos(100,225,20,0,2,"yellow", "green");
desenharArcos(205,220,20,0,2,"yellow", "green");
desenharArcos(150,150,70,-Math.PI,0,"rgba(0, 0, 0, 0)", "DarkGreen");
desenharArcos(150,150,100,-Math.PI,-2.75,"rgba(0, 0, 0, 0)", "DarkGreen");
desenharArcos(150,150,100,-Math.PI*0.249,-Math.PI*.636,"rgba(0, 0, 0, 0)", "DarkGreen");
desenharArcos(150,300,65,0,Math.PI*0.48,"rgba(0, 0, 0, 0)", "DarkGreen");
desenharArcos(150,300,59,-Math.PI*0.50,0,"rgba(0, 0, 0, 0)", "DarkGreen");
desenharArcos(150,300,40,Math.PI*1,0,"DeepSkyBlue", "DarkGreen");
desenharArcos(150,110,20,0,2,"DeepSkyBlue", "blue");
