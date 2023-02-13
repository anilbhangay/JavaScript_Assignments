
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
let color = document.querySelector(".recipe-text").style.color = "#6f2f92";
let  = 


