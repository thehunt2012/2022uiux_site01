let layer = document.querySelectorAll(".layer");

window.addEventListener("scroll",function(){
let scrollTop = window.pageYOffset

// 주어.style.transform = translateY()
layer.forEach(function(item,index){
    let go = item.dataset.go;
    item.style.transform = `translate3d(0,${scrollTop/go*4}px,0)`

});

});