filtrarPorQuantidadeDeDigitos([23, 32, "123", "41", "a3", 234, 1], 2);
function filtrarPorQuantidadeDeDigitos(array, digitos) {
    let newArray = [];
    for (const arr of array) {
        if (arr.toString().length == digitos) {
            newArray.push(arr);
        }
    }
    window.alert(newArray);
}