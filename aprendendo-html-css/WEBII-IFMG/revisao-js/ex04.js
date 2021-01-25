primeiroUltimoElemento(["primeiro", "segundo", "ultimo"])
function primeiroUltimoElemento(array) {
    let newArray = [];
    newArray.push([array[0], array[array.length - 1]]);
    window.alert(newArray);
}