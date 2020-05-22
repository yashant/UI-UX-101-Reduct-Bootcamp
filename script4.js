let tab = document.querySelector(".tab");
tab.addEventListener("click", fix);

function fix(){
   tab.style.marginLeft="0px";
   document.querySelector(".level-button-hidden").style.display="inline-block";
   document.querySelector(".to-be-hidden").style.display="none";
   document.querySelector(".to-be-shown").style.display="inline-block";

}

