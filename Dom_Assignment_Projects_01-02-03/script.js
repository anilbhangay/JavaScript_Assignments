 
 //A new element in the navigation menu.
let list = document.createElement("li");
list.innerHTML = "<a>Hire Me</a>";
let ul = document.querySelector("ul");
ul.appendChild(list);



//Change the placeholder message.
let txt = document.querySelector(".search-box input");
txt.placeholder = "Search My Project";



//Change the text in paragraph.
const element = document.querySelectorAll(".hero-left-section p span");
element[1].innerText = "an Employee";
element[2].innerText = "iNeuron Intelligence Pvt Ltd";


//Change the Avtar with image of "Hitesh sir".
var person = document.querySelector(".hero-right-section img");
person.src="./person-image.jpg";


//Create one more button named "Support Me".
var main = document.querySelector(".hero-right-section-btn");
var newbtn = document.createElement("button");
newbtn.innerText = "Support Me";
main.appendChild(newbtn);



//Change all the "Default links" of the social media.
let sociallinks = document.querySelectorAll("footer ul li a");
sociallinks[0].href="https://github.com/anilbhangay";
sociallinks[1].href="https://www.linkedin.com/in/anil-bhangay-b85a5521b/";
sociallinks[2].href="https://www.instagram.com/anil_bhangay022/";



