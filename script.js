let form = document.getElementById("teamForm")
let teamCount=document.getElementById("teamCount")
let mensaje=document.getElementById("message")
let equiposSeleccionados=false;
let teamMatesArray=[];

form.onsubmit=function(event){
    event.preventDefault()
    if(!teamCount.value){
        mensaje.style.display="block"
    }
    else{
        teamMatesArray=event.value.split('\n')
        for(let i=0; i<teamMatesArray.length;i++){
        }
    }
}

teamCount.addEventListener("change", function(){
    mensaje.style.display="none"
    equiposSeleccionados=true;
})

