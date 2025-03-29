const bars = document.getElementById('bars')
const nav = document.querySelector('nav')
var clicked = false;

bars.addEventListener("click", () => {
    if (clicked == false) {
        nav.style.height = "45vh";
        clicked = true
    } else {
        nav.style.height = "0";
        clicked = false
    }

})