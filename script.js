const container = document.querySelector('#container');
const content = document.createElement('div');
const p = document.createElement('p');
const h3 = document.createElement('h3');
const div2 = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

p.style.color = "red";
p.textContent = "Hey I’m red!";
container.appendChild(p);

h3.style.color = "blue";
h3.textContent = "I’m a blue h3!";
container.appendChild(h3);

div2.style.cssText = "background-color: pink; border: 5px solid black"


