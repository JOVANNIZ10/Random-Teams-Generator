let form = document.getElementById("teamForm")
let teamCount=document.getElementById("teamCount")
let mensaje=document.getElementById("message")
let participants=document.getElementById("participants")
let equiposSeleccionados=false;
let teamsGenerated=false;
let teamMatesArray=[];

form.onsubmit=function(event){
    event.preventDefault()
    if(teamsGenerated){
        let resultsContainer = document.getElementById("results-container");
        resultsContainer.innerHTML="";
        teamsGenerated=false;
    }
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
    teamsGenerated=true;
    mensaje.style.display="none"
    let resultsContainer = document.getElementById("results-container");
    for(let i=0; i<numeroEquipos; i++){
        let ul= document.createElement("ul");
        ul.id="team"+(i+1);
        resultsContainer.appendChild(ul);
        let liName=document.createElement("li");
        liName.innerText="Equipo "+(i+1);
        document.getElementById("team"+(i+1)).appendChild(liName);
    }
    // Repartir los nombres aleatoriamente entre los equipos
    while(teamMatesArray.length > 0){
        for(let i=0; i<numeroEquipos; i++){
            if(teamMatesArray.length === 0) break;
            let randomIndex = Math.floor(Math.random() * teamMatesArray.length);
            let selectedName = teamMatesArray.splice(randomIndex, 1)[0];
            let li = document.createElement("li");
            li.innerText = selectedName;
            document.getElementById("team"+(i+1)).appendChild(li);
        }
    }
    resultsContainer.style.display="block";
    
    let ulFirstTeam=document.getElementById("team1");
    let ulLastTeam=document.getElementById("team"+numeroEquipos);
    ulFirstTeam.children[0].style.borderTopLeftRadius="20px";
    ulFirstTeam.children[0].style.borderTopRightRadius="20px";
    ulLastTeam.children[ulLastTeam.children.length-1].style.borderBottom="none";
    
}

teamCount.addEventListener("change", function(){
    mensaje.style.display="none"
    equiposSeleccionados=true;
    if(teamsGenerated){
        let resultsContainer = document.getElementById("results-container");
        resultsContainer.innerHTML="";
        teamsGenerated=false;
    }
})
