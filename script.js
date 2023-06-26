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

//TEXTOS

const txts = document.getElementById("txt")
const txt = document.querySelectorAll("#txt div")

var idx = 0

function frentetxt() {

    txts.style.transform = `translateX(${-idx *700}px)`
}

function trastxt() {
    txts.style.transform = `translateX(${-idx *700}px)`
}


window.addEventListener('resize', function() {
    // Obter a largura atual da janela
    var windowWidth = window.innerWidth;
  
    // Verificar a largura da janela e realizar alterações responsivas
    if (windowWidth < 768) {
      // Alterações para telas menores que 768px de largura
      // Exemplo:

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
    

      function frentetxt() {

        txts.style.transform = `translateX(${-idx *700}px)`
    }
    
    function trastxt() {
        txts.style.transform = `translateX(${-idx *700}px)`
    }

      
    }
})