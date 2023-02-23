
//Creating one more button named "Pro Subscription"
let button = document.createElement('a');
button.innerHTML = "<a>Pro Subscription</a>";
button.className = "btn";
button.href = "index.html";
let btn = document.querySelector(".btn-1");
btn.appendChild(button);


//Added new list in Recipes 
let newlist = document.createElement('a');
newlist.innerHTML = "<a> Chinese (7)</a>"
newlist.href = "#";
let list = document.querySelector(".tags-container .list-r");
list.appendChild(newlist);


//Added colors in recipe-gallery cards
const blue = document.querySelector('.recipe-gallery .card');
blue.style.color = '#551a8b';


//Created 6th Card in Recipe-gallery
const card = document.createElement('div');
card.className = 'card';
const at = document.createElement('a');
at.className = 'recipe-text-6';
at.href = "#";
const imgs = document.createElement('img');
imgs.src = "./img/idly.jpeg";
imgs.className = 'recipe-img';
const head = document.createElement('h5');
head.className = 'recipe-name';
head.innerHTML = 'Idli Sambar';
const para = document.createElement('p');
para.className = 'recipe-dish';
para.innerHTML = 'Prep : 10min | Cook : 15min';
const main = document.querySelector('.recipe-gallery');
main.appendChild(card);
main.appendChild(at);
card.appendChild(at);
at.appendChild(imgs);
at.appendChild(head);
at.appendChild(para);


