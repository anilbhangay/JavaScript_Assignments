

//Change top logo to ineuron logo
let list = document.querySelector('main header img');
list.src="./assets/ineuron-logo.png";

//Changing hero h1, para font size
var size = document.querySelector('.hero h1');
var para = document.querySelector('.hero p');
size.style.fontSize = '68px';
para.style.fontSize = '17px';


//Changed  main padding 
let padi = document.querySelector('main');
padi.style.padding = "0px 80px";


//Changed App price to 10$
const price = document.querySelector('.app_price span');
price.innerHTML = "$10";

//Added new social icon in footer
const icon = document.createElement('div');
icon.className = 'footer_social_ico';
const ic = document.createElement('i');
ic.className = "fa-brands fa-linkedin";
const socio = document.querySelector('footer .footer_social');
socio.appendChild(icon);
socio.appendChild(ic);
icon.appendChild(ic);



