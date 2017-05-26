console.log('Loaded!');
//change the text of main-text div

var element = document.getelementbyid('main-text');

element.innerHTML = 'new value';

var img = document.getelementbyid('madi');
img.onclick = function() {
  img.style.marginleft = '100px';
};