
var box = document.querySelector('#box'),
    imgList = box.querySelectorAll('.img-box li'),
    roundList = box.querySelectorAll('.list-box li'),
    prev = box.querySelector('.box-btn-left'),
    next = box.querySelector('.box-btn-right'),
    index = 0, timer = null;




function animate(index) {
    for (let i = 0; i < imgList.length; i++) {
        imgList[i].classList.remove("active");
        roundList[i].classList.remove("active");
    }
    imgList[index].classList.add("active");
    roundList[index].classList.add("active");
}

next.onclick = () => qie("right");


prev.onclick = () => qie("left");

function qie(a) {
    if (a == "left" && --index == -1) index = imgList.length - 1;
    if (a == "right" && ++index == imgList.length) index = 0;
    animate(index);
}

for (let j = 0; j < roundList.length; j++) roundList[j].onclick = () => animate(index = j);


function autoplay() {
    timer = setInterval(() => qie("right"), 5000);
    
}
autoplay();

box.onmouseenter = function () {
    // console.log(this)
    clearInterval(timer);
    
}

box.onmouseleave = function () {
    autoplay();
}