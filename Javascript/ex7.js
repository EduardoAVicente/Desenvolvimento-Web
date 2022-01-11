let a = parseFloat(0);
let b = parseFloat(0);
a = prompt("Insira a altura do triângulo equilatero(CM)");
b = prompt("Insira a base do triângulo equilatero(CM)");
while(a <=0 || b <=0){
    alert("Insira um numero valido")
    a = prompt("Insira a altura do triângulo equilatero(CM)");
    b = prompt("Insira a base do triângulo equilatero(CM)");
}
let area = (b*a)/2;
 alert("A area do triângulo é "+ area + " cm")