
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
let colors = document.querySelectorAll(".recipe-text");
colors.style.color = "#6f2f92";


//Create 6th Card in Recipe-gallery
let card = document.createElement("div");
card.className.add("card");

let link = document.createElement("a");
link.href = "#";
link.className.add("recipe-text-5");
link.innerHTML = '<img src="./img/idly.jpeg" class="recipe-img">' + '<h5 class="recipe-name">Idly Sambhar</h5>' + '<p class="recipe-dish">Prep : 5min | Cook : 15min</p>';
let main = document.querySelector(".recipe-gallery");



