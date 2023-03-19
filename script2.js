function changeColorHandler(event){
    event.target.style.color = "silver";
};
function changeColorBack(event){
    event.target.style.color = "black";
};
const pos = document.getElementById('position')
pos.addEventListener("mouseenter", changeColorHandler);
pos.addEventListener("mouseleave", changeColorBack);
const h2 = document.getElementsByClassName('h2');
h2[0].addEventListener("mouseenter", changeColorHandler);
h2[0].addEventListener("mouseleave", changeColorBack);
h2[1].addEventListener("mouseenter", changeColorHandler);
h2[1].addEventListener("mouseleave", changeColorBack);
const big = document.getElementsByClassName('big1');
big[0].addEventListener("mouseenter", changeColorHandler);
big[0].addEventListener("mouseleave", changeColorBack);
const h1 = document.getElementsByTagName('h1');
h1[0].addEventListener("mouseenter", changeColorHandler);
h1[0].addEventListener("mouseleave", changeColorBack);

