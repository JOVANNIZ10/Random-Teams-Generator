let form = document.getElementById("teamForm")
let teamCount=document.getElementById("teamCount")
let mensaje=document.getElementById("message")
let participants=document.getElementById("participants")
let equiposSeleccionados=false;
let teamMatesArray=[];

form.onsubmit=function(event){
    event.preventDefault()
    if(!teamCount.value){
        mensaje.innerText="Por favor, selecciona el número de equipos."
        mensaje.style.display="block"
        return;
    }
   
    let numeroEquipos=teamCount.value;
    teamMatesArray = participants.value.split('\n').filter(name => name.trim() !== "");
    if(teamMatesArray.length==0){
        mensaje.innerText="Por favor, ingresa al menos un participante."
        mensaje.style.display="block"
        return;
    }
    if(teamMatesArray.length<numeroEquipos){
        mensaje.innerText="El número de equipos no puede ser mayor que el número de participantes."
        mensaje.style.display="block"
        return;
    }
    mensaje.style.display="none"
    let ul = document.createElement("ul");
    ul.id="teamMatesList";
    teamMatesArray.forEach(name => {
        let li = document.createElement("li");
        li.innerText = name;
        ul.appendChild(li);
    });
    let resultsContainer = document.getElementById("results-container");
    resultsContainer.appendChild(ul);
    resultsContainer.style.display="block";
}

teamCount.addEventListener("change", function(){
    mensaje.style.display="none"
    equiposSeleccionados=true;
})

