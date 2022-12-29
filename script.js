const h2 = document.createElement('h2');
h2.textContent = '';
document.querySelector('body').appendChild(h2);
const plzWork = document.getElementById('plzWork');
function hoverMessage(e){
    alert ('he will probably be MVP');
    console.log(e)
}
plzWork.addEventListener( "click", hoverMessage);
const changeColor = document.getElementById('changeColor');
function date(event){
    event.target.style.color = "purple";
};
changeColor.addEventListener("mouseenter", date);
function toggle(e){  
    const experiment = document.getElementById('experiment')
    if (experiment.style.display === "none") {
        experiment.style.display = 'block';
    } else {
        experiment.style.display = 'none';
    }
}



