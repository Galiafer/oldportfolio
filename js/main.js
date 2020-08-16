// !SMOOTH SLIDE
$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1500);
            return false;
    });
});
// !SMOOTH SLIDE

// ! ColorSwitching
let textElements = document.querySelectorAll("h3>span, p.about__text>span");

function switchingColor() {
    textElements.forEach(elem => {
        setTimeout(function(){
            elem.classList.add("colorSwitchForward");
            elem.classList.remove("colorSwitchBack");
        },8500);
        setTimeout( function() {
           elem.classList.remove("colorSwitchForward");
           elem.classList.add("colorSwitchBack");
        },16000);
    });
};
setInterval(switchingColor,16500);
// ! ColorSwitching

// ! lineColorSwitching
let lineElements = document.querySelectorAll("h3.services__title,h3.about__title,h3.contact__title, a");
function switchingLine() {
    lineElements.forEach(elem => {
        setTimeout(function(){
            elem.classList.add("lineSwitchForward");
            elem.classList.remove("lineSwitchBack");
        },8500);
        setTimeout( function() {
           elem.classList.remove("lineSwitchForward");
           elem.classList.add("lineSwitchBack");
        },16000);
    });
};
setInterval(switchingLine,16500);
// ! lineColorSwitching

// ! borderColorSwitching
let borderElements = document.querySelectorAll("h3, a");
function switchingBorder() {
    borderElements.forEach(elem => {
        setTimeout(function(){
            elem.classList.add("borderSwitchForward");
            elem.classList.remove("borderSwitchBack");
        },8500);
        setTimeout( function() {
           elem.classList.remove("borderSwitchForward");
           elem.classList.add("borderSwitchBack");
        },16000);
    });
};
setInterval(switchingBorder,16500);
// ! borderColorSwitching

// !NAV COLOR-CHANGE
let nav = document.querySelector(".nav");
window.addEventListener("scroll",function(){
    nav.classList.toggle("nav__scroll", window.scrollY > 10);
});
window.addEventListener("scroll",function(){
    nav.classList.toggle("nav__scroll--back", window.scrollY > 880);
});
window.addEventListener("scroll",function(){
    nav.classList.toggle("nav__scroll--usual", window.scrollY > 1547);
});
// !NAV COLOR-CHANGE


// //! OFFSETtop CHECK
let block = document.querySelector(".services");
console.log(block.offsetTop);
// //! OFFSETtop CHECK