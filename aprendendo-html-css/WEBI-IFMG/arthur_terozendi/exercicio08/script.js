function calcular() {
    var sel = document.querySelector("div#tabuada");
    var num = document.querySelector("input#num").value;
    var tabuada = 0;
    if (num.length == 0) {
        window.alert("Por favor digite um número");   
    }
    else if (num > 10 || num < 1) {
        window.alert("Por favor digite um número entre 1 e 10");
    } 
    else {  
        sel.innerHTML = "";
        for ( var i = 1; i <= 10; i++) {
            tabuada = Number(num) * i;
            sel.innerHTML +=  `<p> ${Number(num)} x ${i} = ${tabuada} </p>`
        }
    }
}