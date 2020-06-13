main.remove();
let element = document.createElement('div')
document.body.appendChild(element)
let h = document.createElement('h1');
h.setAttribute('id', 'victory');
document.body.appendChild(h)
// let h = document.createElement('h1')
// document.body.appendChild(h)
let newHeader = document.getElementById("h1#victory");
newHeader.innerHTML = "Make sure you create an <h1> with id 'victory' with a sweet message in it"
