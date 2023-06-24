const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

var idx = 0

function frente(){
    idx++
    if(idx>img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 300}px)`
}

function tras() {
    idx--
    if (idx < 0) {
      idx = img.length -1
    }
  
    imgs.style.transform = `translateX(${-idx * 300}px)`
  }