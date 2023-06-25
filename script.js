const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

var idx = 0

function frente() {
    idx++
    if (idx > img.length - 1) {
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx *400}px)`
}

function tras() {
    idx--
    if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx *400}px)`
}

var caixatexto = document.getElementById('containertxt')
var textos = document.getElementsByClassName('text-hidden')

function mudatexto(){
    caixatexto.textContent = textos[idx].textContent

}