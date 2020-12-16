function createP() {
var corArray = ["gray", "blue", "yellow", "red"]
    for (let i = 0; i < 4; i++) {
        var titulo = document.createElement('p');
        var texto = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vitae aperiam consequuntur deleniti eum fugit perferendis provident explicabo dolorem, facilis officiis magnam perspiciatis totam? Eos autem sequi voluptas hic quibusdam!");
        titulo.appendChild(texto);
        titulo.style.backgroundColor = corArray[i];
        document.body.appendChild(titulo);
    }
}