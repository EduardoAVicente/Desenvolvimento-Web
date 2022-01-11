e = parseFloat(prompt("Insira o numero de algarismos"))
let a =2;
let b=7;
let c= 3;
let print = [];
for(let i = 1; i<=e; i++){
    if(i<4){
    if(i===1){
        print.push(a);
    }
    if(i===2){
        print.push(b);
    }
    if(i===3){
        print.push(c)
    }}
    if(i>3){
        if(i % 3===0){
            c =c *4
            print.push(c)
    }
        if(i % 3===1){
            a =a *2
            print.push(a)
        }
        if(i % 3===2){
            b =b *3
            print.push(b)
        }
    }

}
alert("Os termos são: "+ print)