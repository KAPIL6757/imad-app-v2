console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'new value';
var img = document.getElementById('madi');
img.onclick = function () {
    var interval = setInterval(moveLeft, 100);
   img.style.marginLeft = '100px';
};
