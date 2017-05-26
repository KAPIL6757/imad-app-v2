console.log('Loaded!');
//change the text of main-text div

var element = document.getElementByID('main-text');

element.innerHTML = 'new value';

var img = document.getElementByID('madi');
img.onclick = function() {
  img.style.marginleft = '100px';
};