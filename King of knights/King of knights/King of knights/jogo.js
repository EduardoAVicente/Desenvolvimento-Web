//sistema base
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
Math.random();

window.onload = function (){//destiva botão direito do mouse no canvas
    document.getElementById("myCanvas").oncontextmenu= function (){
        return false;
    }
}

//variaveis
var cenario = 0;
var fim = 0;
var aux = false;
var ataqui = true;


//funções

function desaparecer(mob){
    if(personagem.score>4000){
        mob.x = -2000;
        mob.y = -2000;
        mob.dano= 0;
        mob.speed = 0;}
}


function ataque(mob,score, dano) {

    if (mob.x >= dados.x && mob.x <= dados.x + dados.largura) {
        if (mob.y >= dados.y && mob.y <= dados.y + dados.altura) {
            mob.vida = mob.vida - dano;
            personagem.score= personagem.score +score;

        }
    }
}

function  dano(mob){
    if (mob.vida>0 && personagem.vida>0)
        if(mob.x >=danos.x && mob.x<=danos.x+danos.largura){
            if(mob.y >=danos.y && mob.y<=danos.y+danos.altura){
                personagem.vida = personagem.vida - mob.dano;
            }
        }


}

function seguir(mob){

    if (mob.vida >0 && personagem.vida>0)
        if (mob.x > personagem.x)
            mob.x = mob.x - mob.speed;
        else if (mob.x < personagem.x)
            mob.x = mob.x + mob.speed;
    if (mob.vida >0)
        if (mob.y > personagem.y)
            mob.y = mob.y - mob.speed;
        else if (mob.y < personagem.y)
            mob.y = mob.y + mob.speed;
}

function caracter(img,usuario) {

    var car = new Image();
    car.src = "./personagens/" + img + ".png";
    if (usuario.vida >0)
        ctx.drawImage(car, usuario.x, usuario.y, usuario.largura, usuario.altura);
    if (usuario.vida <= 0 && usuario  != personagem)
        ctx.drawImage(car, -20, -20, usuario.largura, usuario.altura);
    if (usuario.vida <= 0 && usuario  == personagem){
        escreve("red","Game Over",canvas.width/2,canvas.height/2);
        setTimeout(function(){ window.location.href = window.location.pathname + window.location.search + window.location.hash;}, 5000);}

}

function escreve(cor,texto,x,y){
    ctx.fillStyle=cor;
    ctx.fillText(texto,x, y);
}

function ressusitar(mob,vida,poder){
    if (mob.vida <= 0){
        mob.vida=vida;
        mob.x =Math.random() * (canvas.height - 1) + 1;
        mob.y = Math.random() * (canvas.height - 1) + 1;
        personagem.poder = personagem.poder + poder;
    }
}


//Bloco dos personagens
personagem={
    x:canvas.width/2,
    y:canvas.height/2,
    speed:2,
    altura:20,
    largura: 20,
    vida: 100,
    score: 0,
    poder:3,
    dano:25
}

escudo={
    x:-20,
    y:-20,
    speed:0.2,
    altura:10,
    largura: 10,
    vida: 100,


}

dragao={
    x:Math.random() * (canvas.height - 1) + 1,
    y:Math.random() * (canvas.height - 1) + 1,
    speed:0.5,
    altura:80,
    largura: 80,
    vida: 1000,
    dano:0.7

}

zumbi={
    x:Math.random() * (canvas.height - 1) + 1,
    y:Math.random() * (canvas.height - 1) + 1,
    speed:0.2,
    altura:15,
    largura: 15,
    vida: 100,
    dano:0.01
}


raposa={
    x:Math.random() * (canvas.height - 1) + 1,
    y:Math.random() * (canvas.height - 1) + 1,
    speed:0.1,
    altura: 20,
    largura: 20,
    vida: 500,
    dano:0.5
}


lobo={
    x:Math.random() * (canvas.height - 1) + 1,
    y:Math.random() * (canvas.height - 1) + 1,
    speed:0.5,
    altura:15,
    largura: 15,
    vida: 150,
    dano:0.03
}

anjo={
    x:Math.random() * (canvas.height - 1) + 1,
    y:Math.random() * (canvas.height - 1) + 1,
    speed:0.3,
    altura:20,
    largura: 20,
    vida: 250,
    dano:0.04
}

esqueleto={
    x:Math.random() * (canvas.height - 1) + 1,
    y:Math.random() * (canvas.height - 1) + 1,
    speed:0.25,
    altura:15,
    largura: 15,
    vida: 100,
    dano:0.02
}


//Bloco de movimentação do personagem

document.addEventListener("keydown", function(e) {//d
    if(personagem.vida >0)
        if(e.keyCode == 68 && personagem.x + personagem.largura < canvas.width){
            personagem.x = personagem.x + personagem.speed;
        }});

document.addEventListener("keydown", function(e) {//a
    if(personagem.vida >0)
        if(e.keyCode == 65 && personagem.x> 0){
            personagem.x = personagem.x - personagem.speed;
        }});

document.addEventListener("keydown", function(e) {//s
    if(personagem.vida >0)
        if(e.keyCode == 83 && personagem.y + personagem.altura < canvas.height){
            personagem.y = personagem.y + personagem.speed;
        }});

document.addEventListener("keydown", function(e) {//w
    if(personagem.vida >0)
        if(e.keyCode == 87 && personagem.y > 0){
            personagem.y = personagem.y - personagem.speed;
        }});

document.addEventListener("keydown", function(e) {//poder

    if(e.keyCode == 81){
        dados = {
            x : personagem.x-15,
            y : personagem.y-15,
            largura : personagem.largura+15,
            altura : personagem.altura+15}
        if(personagem.poder>=3) {
            personagem.poder = personagem.poder - 3;
            ataque(zumbi, 10, personagem.dano + 75);
            ataque(lobo, 20, personagem.dano + 75);
            ataque(anjo, 30, personagem.dano + 75);
            ataque(esqueleto, 40, personagem.dano + 75);
            ataque(raposa, 100, personagem.dano + 75)
            ataque(dragao, 100, personagem.dano + 150);
        }
    }

});



//ataque
document.addEventListener("click", function(e) {

    dados = {
        x: personagem.x - 15,
        y: personagem.y - 15,
        largura: personagem.largura + 15,
        altura: personagem.altura + 15
    }
    if (ataqui == true) {
        ataque(zumbi, 10, personagem.dano);
        ataque(lobo, 20, personagem.dano);
        ataque(anjo, 30, personagem.dano);
        ataque(esqueleto, 40, personagem.dano);
        ataque(raposa, 100, personagem.dano);
        ataque(dragao, 0, personagem.dano);
    }

    if (ataqui == false) {

        ataque(zumbi, 0, 0);
        ataque(lobo, 0, 0);
        ataque(anjo, 0, 0);
        ataque(esqueleto, 0, 0);
        ataque(raposa, 0, 0);
        ataque(dragao, 0, 0);
    }

});
//defesa


    document.addEventListener("contextmenu", function(e) {
        aux = !aux;
        if(aux){//escudo ativo
            zumbi.dano = 0;
            raposa.dano = 0;
            esqueleto.dano = 0;
            anjo.dano = 0;
            lobo.dano = 0;
            dragao.dano=0.3;
            escudo.x=10;
            escudo.y=4;
            ataqui=false;
        }else{//escudo desativado
            zumbi.dano = 0.01;
            raposa.dano = 0.5;
            esqueleto.dano = 0.01;
            anjo.dano = 0.04;
            lobo.dano = 0.03;
            dragao.dano=0.7;
            escudo.x=-20;
            escudo.y=-20;
            ataqui=true;
        }
    });



//jogo

    function desenha(){

        danos = {//ataque do mob
            x : personagem.x-5,
            y : personagem.y-5,
            largura : personagem.largura+5,
            altura : personagem.altura+5
        }

        dano(zumbi);
        dano(lobo);
        dano(anjo);
        dano(esqueleto);
        dano(raposa);
        if(fim ==1)
            dano(dragao);



        //escolha de cenario
        if(personagem.score >= 500)
            cenario+=1
        //escolhe o fundo
        var fundo = new Image();
        if (personagem.score <500)
            fundo.src = "./fundos/fundo.png";
        if (personagem.score >=500 && personagem.score <1000)
            fundo.src = "./fundos/fundo1.png";
        if (personagem.score >=1000 && personagem.score <1500)
            fundo.src = "./fundos/fundo2.png";
        if (personagem.score >=1500 && personagem.score <2000)
            fundo.src = "./fundos/fundo3.png";
        if (personagem.score >=2000 && personagem.score <2500)
            fundo.src = "./fundos/fundo4.png";
        if (personagem.score >=2500 && personagem.score <3000)
            fundo.src = "./fundos/fundo5.png";
        if (personagem.score >=3000 && personagem.score <3500)
            fundo.src = "./fundos/fundo6.png";
        if (personagem.score >=3500 && personagem.score <4000)
            fundo.src = "./fundos/fundo7.png";
        if (personagem.score >=3500 && personagem.score <4000)
            fundo.src = "./fundos/fundo8.png";
        if (personagem.score >=4000){//luta contra o chefão
            fundo.src = "./fundos/fundo9.png";
            desaparecer(zumbi);
            desaparecer(lobo);
            desaparecer(raposa);
            desaparecer(esqueleto);
            desaparecer(anjo);
            fim =1;}
        ctx.drawImage(fundo, 0, 0,canvas.width,canvas.height);



        //seguir
        seguir(zumbi);
        seguir(lobo);
        seguir(anjo);
        seguir(esqueleto);
        seguir(raposa);
        if(fim ==1)
            seguir(dragao);

        //imagens dos personagens

        caracter("cavaleiro",personagem);
        caracter("zumbi",zumbi);
        caracter("lobo",lobo);
        caracter("angel",anjo);
        caracter("esqueleto",esqueleto);
        caracter("kurama",raposa);
        caracter("escudo",escudo);
        if(fim ==1)
            caracter("dragao",dragao);





        //status
        if(personagem.vida>=0){
            escreve("black","Vida: "+  parseInt(personagem.vida) + "%",canvas.width-60, 10);}
        if(personagem.vida < 0){
            escreve("black","Vida: 0%",canvas.width-60, 10);}
        escreve("black","Score: "+ personagem.score,canvas.width-60, 20);
        if(personagem.poder < 3){
            escreve("red","Poder: "+ personagem.poder,canvas.width-60, 30);
        }
        if(personagem.poder >= 3){
            escreve("black","Poder: "+ personagem.poder,canvas.width-60, 30);
        }
        if(dragao.vida <= 0){
            escreve("green","Parabens você ganhou!!!",canvas.width/2,canvas.height/2);
            dragao.altura=0;
            dragao.largura=0;
            setTimeout(function e() {
                window.location.href = window.location.pathname + window.location.search + window.location.hash;
            },10000);
        }

        //ressusitar mob
        ressusitar(lobo,150,1);
        ressusitar(anjo,250,1.5);
        ressusitar(esqueleto,100,0.5);
        ressusitar(zumbi,100,0.5);
        ressusitar(raposa,500,6);


        requestAnimationFrame(desenha);//reler o codigo
    }

    function start() {//iniciar o jogo
        requestAnimationFrame(desenha);
        document.getElementById("botao").style.display = "none";
        document.getElementById("myCanvas").style.display = "block";
    }


