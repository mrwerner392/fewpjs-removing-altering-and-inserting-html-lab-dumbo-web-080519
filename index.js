// Write your code here!
document.querySelector('main#main').remove();
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.innerHTML = 'Matt is the champion';
