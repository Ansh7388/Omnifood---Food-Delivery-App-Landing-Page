'use strict';

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
/////////////////////////////////////////////////////////////
const modal = document.querySelector('.header');
const btnStateModal = document.querySelector('.btn-mobile-nav')
// const btnCloseModal = document.querySelector('.menuClose');
// const btnOpenModal = document.querySelector('.menuOpen');

const openModal =function(){
    modal.classList.toggle('nav-open');
}
// const closeModal =function(){
//     modal.classList.remove('nav-open');
// }

btnStateModal.addEventListener("click",openModal);
// btnCloseModal.addEventListener('click',closeModal);

//////////////////////////////////////////////////////////////////

//sticky navigation


const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
    function (entries) {
    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false){
        document.body.classList.add("sticky");
    }
    if(ent.isIntersecting === true){
        document.body.classList.remove("sticky");
    }
},
{
    //in view port
    root: null,
    threshold: 0,
    rootMargin: '-80px',
}
);
obs.observe(sectionHeroEl);


// ///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
link.addEventListener("click",function(e){
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll back to top
    if(href === "#")
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        if(href !== "#" && href.startsWith("#")){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior:"smooth"});
        }
        if(link.classList.contains("main-nav-link"))
        modal.classList.toggle("nav-open");
});
});
//////////////////////////////////////////////////////////


