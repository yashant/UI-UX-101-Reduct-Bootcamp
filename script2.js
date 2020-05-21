let minus = document.querySelector(".minus");
console.log(minus);
minus.addEventListener("click", fix);

function fix(){
    console.log("subtract- here");
    let one = document.querySelector(".one");
    let two = document.querySelector(".two");
    let three = document.querySelector(".three");

    if (one.childElementCount > 1){
        one.removeChild(one.lastElementChild);
    }

    else if(two.childElementCount > 1){
        two.removeChild(two.lastElementChild);
    }
    else if(three.childElementCount > 1){
        three.removeChild(three.lastElementChild);
    }        
    
    if (three.childElementCount === 1){
    document.querySelector(".level-button-hidden").style.display="inline";
    //document.querySelector('.left-text').style.textAlign="center";
    }

}
