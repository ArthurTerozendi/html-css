let valor = window.prompt("Digite o valor que vai ser repetido: ");
let n = parseFloat(window.prompt("Digite quantas vezes irá se repetir"))
repetir(valor, n);

function repetir(valor, n) {
    let repeticao = [];
    for (let i = 0; i < n; i++) {
        repeticao.push(valor);
    }
    window.alert(repeticao);
}