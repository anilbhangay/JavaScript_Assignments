
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


// Change the color of heading and paragraph.
let heading = document.querySelectorAll(".accordian h3");
let parag = document.querySelectorAll(".accordian p");
heading.forEach((element)=> {element.style.backgroundColor="#dadaf8"});
parag.forEach((element)=> {element.style.backgroundColor="#eeeeff"});


// Adding new accordian to the page.
let parent = document.querySelector(".accordian-wrapper");

