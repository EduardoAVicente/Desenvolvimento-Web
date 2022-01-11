let n1 = parseFloat(prompt("Insira a nota 1:"));
let n2 = parseFloat(prompt("Insira a nota 2:"));
let media =(n1+n2)/2

if(media<3){
    alert("Reprovado")
}
if(media>=3 && media<=7){
    alert("Exame")
}
if(media>7){
    alert("Aprovado")
}