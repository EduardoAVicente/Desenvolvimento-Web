let p = prompt("Insira seu peso");
let a = prompt("Insira sua altura");
if(a< 1.20) {
    if (p < 60) {
        alert("A");
    }
    if(p>=60 && p<=90){
        alert("D")
    }
    if(p>90){
        alert("G")
    }
}
if(a>=1.20 && a<=1.70) {
    if (p < 60) {
        alert("B");
    }
    if(p>=60 && p<=90){
        alert("E")
    }
    if(p>90){
        alert("H")
    }
}
if(a> 1.70) {
    if (p < 60) {
        alert("C");
    }
    if(p>=60 && p<=90){
        alert("F")
    }
    if(p>90){
        alert("I")
    }
}

