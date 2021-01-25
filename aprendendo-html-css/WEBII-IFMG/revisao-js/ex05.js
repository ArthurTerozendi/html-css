removerPropriedade({a: 1, b: 20}, "b");

function removerPropriedade(obj, propriedade) {
    let newObj = obj;

    delete newObj[propriedade];
    
    window.alert(JSON.stringify(newObj));
}