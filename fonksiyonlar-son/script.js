var counter = 0;
var numberDOM = document.querySelector("#number");
let arttırmaDOM = document.querySelector("#arttırma");
let azaltmaDOM = document.querySelector("#azaltma");

numberDOM.innerHTML = counter

arttırmaDOM.addEventListener("click", clickevent)
azaltmaDOM.addEventListener("click", clickevent)

function clickevent (){
    this.id == "arttırma" ? counter += 1 : counter -= 1 
    numberDOM.innerHTML = counter
}