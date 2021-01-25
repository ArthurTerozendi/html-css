let num = window.prompt("Digite quantas vezes irá repetir: ");
simboloMais(num);

function simboloMais(num) {
    let string = "";
    for (let i = 0; i < num; i++) {
        string += "+";
    }
    window.alert(string);
}