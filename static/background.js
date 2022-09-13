let background = document.getElementsByClassName("background")[0];
let rotation = 0;

setInterval(function(){
    background.style.transform = "rotate("+rotation+"deg)";
    rotation += 0.01;
    if (rotation > 90) {
        rotation = 0;
    }
}, 1);

function centerBackground() {
    let width = document.body.clientWidth;
    let left = -parseInt((2048 - width) / 2);
    background.style.left = left + "px";
}

centerBackground();
window.addEventListener("resize", centerBackground);