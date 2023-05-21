import './index.css';
import Icon from './assets/javascript.jpg';

console.log('Hello World!');

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';
document.body.append(h1);

const myIcon = new Image();
myIcon.src = Icon;
document.body.append(myIcon);

// https://github.com/Morfielm/webpack zadanie 3