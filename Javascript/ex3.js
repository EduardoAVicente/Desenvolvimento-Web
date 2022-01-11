var  i = parseFloat(prompt("Insira valor de I(1 a 3)"));
var a = parseFloat(prompt("Insira valor de A"));
let b = parseFloat(prompt("Insira valor de B"));
let c = parseFloat(prompt("Insira valor de C"));
let big = parseFloat(a);
let small = parseFloat(a);
let medio =parseFloat(a);

if(b > a && b>c){
    big = b;
}
if(c > a && c>b){
    big = c;
}
if(b<a && b<c){
    small=b;
}
if(c<a && c<b){
    small=c;
}
if(small == a && big == c || small== c && big==a){
    medio=b;
}
if(small == a && big==b|| small == b && big==a){
    medio=c;
}

if(i === 1){
    alert(big+", "+ medio + ", "+ small);
}
if(i === 2){
    alert(small+", "+ medio + ", "+ big);
}
if(i === 3){
    alert(small+", "+ big + ", "+ medio);
}