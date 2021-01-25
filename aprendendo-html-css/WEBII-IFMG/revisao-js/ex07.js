despesasTotais([
    {nome: "Jornal", categoria: "informação", preco: "30.0"},
    {nome: "Netflix", categoria: "entreterimento", preco: "15.0"},
    {nome: "Cartão", categoria: "banco", preco: "333.0"}
]
);

function despesasTotais(objArray) {
    let precos = []
    
    objArray.map(
        preco => {
            precos.push(parseFloat(preco.preco));
        }
    )
    var despesaTotal = precos.reduce(
        (total, valorAtual) => total + valorAtual
    )

    window.alert(`Total de despesas ${despesaTotal}`);
}