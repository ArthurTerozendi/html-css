var visivel = false;
function toggleShowDiv() {
    visivel = !visivel;
    if (visivel) {
        document.querySelector(".caixa").className = "caixa visivel";
    } else {
        document.querySelector(".caixa").className = "caixa";
    }
}