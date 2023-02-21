// Changing top logo to ineuron logo
let list = document.querySelector('main header img');
list.src="./assets/ineuron-logo.png";

//Changing hero h1 font size
let size = document.querySelector('.hero h1');
size.style.fontSize = '68px';

var para = document.querySelector('.hero p');
para.style.fontSize = '17px';


//Changing  main padding 
let padi = document.querySelector('main');
padi.style.padding = "0px 80px";


//Changing App price to 10$
const price = document.querySelector('.app_price span');
price.innerHTML = "$10";

// Adding new social icon in footer
const icon = document.createElement('div');
icon.className = 'footer_social_ico';
const i = document.createElement('i');
i.className = "fa-brands fa-linkedin";

