
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
let colors = document.querySelector(".recipe-text");
colors.style.color = "#6f2f92";


//Create 6th Card in Recipe-gallery
var main = document.querySelector(".recipe-gallery");

var card = document.createElement("div");
card.classList.add("card");

var link = document.createElement("a");
link.href = "#";
link.classList.add("recipe-text-6");

var image = document.createElement("img");
image.src="./img/idly.jpeg";
image.classList.add("recipe-img");

var heading = document.createElement("h5");
heading.textContent = "Idly Sambhar";
heading.classList.add("recipe-name");

var paragraph = document.createElement("p");
paragraph.textContent = "Prep : 5min | Cook : 15min";
paragraph.classList.add("recipe-dish");


link.appendChild(image);
link.appendChild(heading);
link.appendChild(paragraph);

card.appendChild(link);
card.appendChild(main);





