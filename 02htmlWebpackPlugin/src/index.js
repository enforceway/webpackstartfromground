import sayhi from './components/greeting'
const sayHiToFarrell = sayhi('Farrell!');
const p = document.createElement('h1');
p.setAttribute('class', 'greeting-msg');
p.innerHTML = sayHiToFarrell();
document.body.appendChild(p);