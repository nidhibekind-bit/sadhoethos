
window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

reveals.forEach(section=>{

const trigger = window.innerHeight * .85;

const top = section.getBoundingClientRect().top;

if(top < trigger){

section.classList.add("active");

}

});

}

revealSections();
});
