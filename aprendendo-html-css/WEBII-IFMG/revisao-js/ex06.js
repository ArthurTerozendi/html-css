objetoParaArray({a: 1, b: 2});

function objetoParaArray(obj) {
    var array = Object.entries(obj);
    window.alert(array);
}