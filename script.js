const h2 = document.createElement('h2');
h2.textContent = '';
document.querySelector('body').appendChild(h2);
const alertMessage = document.getElementById('alertMessage');
function hoverMessage(){
    alert ('he will probably be MVP');
}
alertMessage.addEventListener( "click", hoverMessage);
const changeColor = document.getElementById('changeColor');
function changeTheColor(event){
    event.target.style.color = "silver";
};
changeColor.addEventListener("mouseenter", changeTheColor);


