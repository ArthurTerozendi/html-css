var img = ['banner_1.png', 'banner_2.png', 'banner_3.png']
var imgCarrosselAtual = 0;
function girarCarrosselPrev() {
    if (imgCarrosselAtual == 0) {
        imgCarrosselAtual = 2;
    } else {
        imgCarrosselAtual--;
    }
    document.getElementById("carrossel").src = `img/${img[imgCarrosselAtual]}`
}

function girarCarrosselNext() {
    if (imgCarrosselAtual == 2) {
        imgCarrosselAtual = 0;
    } else {
        imgCarrosselAtual++;
    }
    document.getElementById("carrossel").src = `img/${img[imgCarrosselAtual]}`
}