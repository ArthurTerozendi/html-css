function changePag() {
    var pag = document.getElementById("paginas").value;
    document.getElementById("iframe").src = `http://200.131.14.132/~alunoweb2019/AF03/${pag}`;
}