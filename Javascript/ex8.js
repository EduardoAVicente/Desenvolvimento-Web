let n = prompt("Insira os numeros(Escreva sair para terminar)");

while(isNaN(parseInt(n))){
    n = prompt("Insira os numeros(Escreva sair para terminar)");
}

let soma = 0;
let digito = 0;
let media = 0;
let maior = parseInt(n);
let menor = parseInt(n);
let media_par = 0;
let soma_par = 0;
let t_par = 0;
let t_impar = 0;
let media_impar = 0;

while(1){

    if(n === "sair" || n ==="SAIR" || n === "Sair"){
        break;
    } else if(!isNaN(parseInt(n))){
        n = parseInt(n);
        soma += n;
        digito = digito + 1;
        media = soma/digito;
        if(n > maior){
            maior = n;
        }

        if(n < menor){
            menor = n;
        }

        if (n % 2 == 0) {
            t_par = t_par + 1;
            soma_par = soma_par + n;
            media_par = soma_par / t_par;

        }if (n % 3 == 0 || n == 1) {
            t_impar = t_impar + 1;


        }

    }

    n = prompt("Insira os numeros(Escreva sair para terminar)");
}

media = soma/digito;
media_impar = (t_impar*100)/digito;


alert("Soma: "+ soma + "\n" +
    "Quantidade de digitos: " + digito + "\n" +
    "Media geral: " + media + "\n" +
    "Maior digito: " + maior + "\n" +
    "Menor digito: " + menor + "\n" +
    "Media par: " + media_par + "\n" +
    "Porcentagem Impar: " + media_impar + "%");