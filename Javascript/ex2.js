let n1 = prompt("Nota de laboratorio");
let n2 = prompt("Nota de avaliação semestral");
let n3 = prompt("Nota do exame final")
let media = (n1*2 + n2*3 + n3*5)/10;

if(media >=8){
    alert("Conceito A");
}
if(media <8  && media >= 7){
    alert("Conceito B");
}
if(media <7  && media >= 6){
    alert("Conceito C");
}
if(media <6  && media >= 5){
    alert("Conceito D");
}
if(media <5){
    alert("Conceito E");
}

