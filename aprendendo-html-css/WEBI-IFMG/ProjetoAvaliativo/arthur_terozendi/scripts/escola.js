function mudarFiltro(id) {
    document.getElementById(`${id}`).style.filter = "grayscale(0)";
}
function aplicarGrayScale(id) {
    document.getElementById(`${id}`).style.filter = "grayscale(100%)";
}

function zoomModal(id) {
    
    var modal = document.getElementById("myModal");
    var img = document.getElementById(id).src;
    
    modal.style.display = "block";
    document.getElementById("imgModal").src = img;
    window.onclick = event => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}