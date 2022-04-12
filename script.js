const container = document.querySelector('#container');
const content = document.createElement('div');
const p1 = document.createElement('p');
const h3 = document.createElement('h3');
const div2 = document.createElement('div');
const p2 = document.createElement('p');
const h1 = document.createElement('h1');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

p1.style.color = "red";
p1.textContent = "Hey I’m red!";
container.appendChild(p1);

h3.style.color = "blue";
h3.textContent = "I’m a blue h3!";
container.appendChild(h3);

div2.style.cssText = "background-color: pink; border: 5px solid black";
h1.textContent = "I'm in a div";
p2.textContent = "ME TOO!";
div2.appendChild(h1);
div2.appendChild(p2);
container.appendChild(div2);

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});





