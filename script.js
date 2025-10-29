const form = document.getElementById("teamForm")
const teamCount=document.getElementById("teamCount")
const mensaje=document.getElementById("message")
const participants=document.getElementById("participants")
const resultsContainer=document.getElementById("results-container")

let teamsGenerated=false;
let teamMatesArray=[];

form.onsubmit=function(event){
    event.preventDefault()
    if(teamsGenerated){
        emptyResults();
    }
    if(!teamCount.value){
        showMessage("Por favor, selecciona el número de equipos.");
        return;
    }
    
    let numeroEquipos=teamCount.value;
    teamMatesArray = participants.value.split('\n').filter(name => name.trim() !== "");
    
    if(teamMatesArray.length==0){
        showMessage("Por favor, ingresa al menos un participante.");
        return;
    }
    
    if(teamMatesArray.length<numeroEquipos){
        showMessage("El número de equipos no puede ser mayor que el número de participantes.");
        return;
    }
    
    hideMessage();
    
    createTeams(numeroEquipos);

    distributePlayers(numeroEquipos);

    showResults();

    fixStyle(numeroEquipos);

    teamsGenerated=true;
    
}

teamCount.addEventListener("change", function(){
    mensaje.style.display="none"
    if(teamsGenerated){
        resultsContainer.innerHTML="";
        teamsGenerated=false;
    }
})

let hideMessage=()=>{
    mensaje.style.display="none"
}

let showMessage=(text)=>{
    mensaje.innerText=text
    mensaje.style.display="block"
}

let createTeams=(numeroEquipos)=>{
    for(let i=0; i<numeroEquipos; i++){
        let ul= document.createElement("ul");
        ul.id="team"+(i+1);
        resultsContainer.appendChild(ul);
        let liName=document.createElement("li");
        liName.innerText="Equipo "+(i+1);
        document.getElementById("team"+(i+1)).appendChild(liName);
    }
}

let distributePlayers=(numeroEquipos)=>{
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
}

let emptyResults=()=>{
    resultsContainer.innerHTML="";
    teamsGenerated=false;
}

let showResults=()=>{
    resultsContainer.style.display="block";
}

let fixStyle=(numeroEquipos)=>{
    let ulFirstTeam=document.getElementById("team1");
    let ulLastTeam=document.getElementById("team"+numeroEquipos);
    ulFirstTeam.children[0].style.borderTopLeftRadius="20px";
    ulFirstTeam.children[0].style.borderTopRightRadius="20px";
    ulLastTeam.children[ulLastTeam.children.length-1].style.borderBottom="none";
}
