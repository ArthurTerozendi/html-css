let num = window.prompt("Digite um número entre 1 e 10");
funcaoDaSorte(num);
function funcaoDaSorte(num) {
    let sorteado = Math.floor(Math.random() * 10);
    console.log(sorteado);
    if (num == sorteado) {
        window.alert(`Parabéns! O número sorteado foi o ${sorteado}`)
    }else {
        window.alert(`Que Pena! O número sorteado foi o ${sorteado}`)
    }
}