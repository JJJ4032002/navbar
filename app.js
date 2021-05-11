const button = document.body.querySelector("#menu");

const und = document.body.querySelector("#under-list");

button.addEventListener("click",()=>{
    if(und.style.display == "none"){
        und.style.display = "unset";
        
    }
    else{
        und.style.display = "none";
    }
})