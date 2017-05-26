console.log('Loaded!');
//change the text when click
var element = document.getElementById('main-text');
element.innerHTML = 'new value';
//move to image on right 
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 15;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function () {
   var interval = setInterval(moveRight, 50);
};
