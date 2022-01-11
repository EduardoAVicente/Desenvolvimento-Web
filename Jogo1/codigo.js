function aleatorio(){
    a = Math.floor(Math.random()*100);
    console.log(a);
}



score =0;
function resposta() {
    var valor = parseFloat(document.getElementById("entrada").value);

    if (document.getElementById("entrada").value == "") {
        document.getElementById("legenda").innerHTML = "A caixa de texto esta vazia !!!";
        document.getElementById("legenda").style.color = "#cf0000";
    } else {
        if (true === isNaN(valor)) {
            document.getElementById("legenda").innerHTML = "Isso não é um número";
            document.getElementById("legenda").style.color = "#cf0000";
        }
        if (valor == a) {
            document.getElementById("legenda").innerHTML = "Parabéns você acertou !!!";
            document.getElementById("legenda").style.color = "#21cd1b";



        }
        if (valor < a) {
            if (parseFloat(valor) + 1 === a || parseFloat(valor) + 2 === a || parseFloat(valor) + 3 === a) {
                document.getElementById("legenda").innerHTML = "Está bem perto";
                document.getElementById("legenda").style.color = "#0042ff";
            } else {
                document.getElementById("legenda").innerHTML = "Um pouco mais para cima";
                document.getElementById("legenda").style.color = "#ffca03";
            }
        }
        if (valor > a) {
            if (parseFloat(valor) - 1 == a || parseFloat(valor) - 2 == a || parseFloat(valor) - 3 == a) {
                document.getElementById("legenda").innerHTML = "Está bem perto";
                document.getElementById("legenda").style.color = "#0042ff";
            } else {
                document.getElementById("legenda").innerHTML = "Um pouco mais para baixo";
                document.getElementById("legenda").style.color = "#ffca03";
            }
        }

    }
}
