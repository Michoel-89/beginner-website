const h2 = document.createElement('h2');
h2.textContent = '';
document.querySelector('body').appendChild(h2);
const plzWork = document.getElementById('plzWork');
function hoverMessage(e){
    alert ('he will probably be MVP');
    console.log(e)
}
plzWork.addEventListener( "click", hoverMessage)

