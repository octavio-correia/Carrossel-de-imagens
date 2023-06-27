const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

var idx = 0

function frente() {
    idx++
    if (idx > img.length - 1) {
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 400}px)`
}

function tras() {
    idx--
    if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 400}px)`
}

const txts = document.getElementById("txt")
const txt = document.querySelectorAll("#txt div")

var idx = 0

function frentetxt() {
    txts.style.transform = `translateX(${-idx * 700}px)`
}

function trastxt() {
    txts.style.transform = `translateX(${-idx * 700}px)`
}

// ----------------------RESPONSIVO-----------------------------//

var idx = 0

function frenteR() {
    idx++
    if (idx > img.length - 1) {
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 200}px)`
}

function trasR() {
    idx--
    if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 200}px)`
}

//TEXTOS

var idx = 0

function frentetxtR() {

    txts.style.transform = `translateX(${-idx * 330}px)`
}

function trastxtR() {
    txts.style.transform = `translateX(${-idx * 330}px)`
}


window.addEventListener('resize', function () {
    // Obter a largura atual da janela
    var windowWidth = window.innerWidth;
    if (windowWidth < 768) {
        // Executar função quando a largura for menor que 768
        //TEXTOS
        frenteR()
        frentetxtR()
        trasR()
        trastxtR()

    } else {
        // Executar outra função quando a largura for maior ou igual a 768
        frente()
        frentetxt()
        tras()
        trastxt()
    }
});