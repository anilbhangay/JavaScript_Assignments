
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => { 
element.addEventListener("click", () => {
let para = element.nextElementSibling;
if (para.style.display === "block") {
    para.style.display = "none";
}  else {
    para.style.display = "block";
  }
 });
});


// // Change the color of heading and paragraph.
let heading = document.querySelectorAll(".accordian h3");
let parag = document.querySelectorAll(".accordian p");
heading.forEach((element)=> {element.style.backgroundColor="#dadaf8"});
parag.forEach((element)=> {element.style.backgroundColor="#eeeeff"});


// Adding new accordian to the page.
let parent = document.querySelector(".accordian-wrapper");
let element = document.createElement("div");
element.classList.add("accordian");
let head = document.createElement("h3");
let para = document.createElement("p");
para.innerText = "I posses a very good command over the Full Stack Developement technologies like MERN which can be seen in my  work over the Github.";
para.style.display = "none";
head.innerText = "Skills";
element.appendChild(head);
element.appendChild(para);
parent.appendChild(element);


// Adding code for addEventListener.
let newList = document.querySelectorAll(".accordian h3");
newList[newList.length-1].addEventListener("click", (event) => {
    let element = event.target.nextElementSibling;
    if (element.style.display === "block") {
            element.style.display = "none";
    } else {
            element.style.display = "block";
    }
});


//  Change the color of heading and paragraph of last div.
let heaad = document.querySelectorAll(".accordian h3");
let paara = document.querySelectorAll(".accordian p");
heaad.forEach((element)=> {element.style.backgroundColor="#dadaf8"});
paara.forEach((element)=> {element.style.backgroundColor="#eeeeff"});






