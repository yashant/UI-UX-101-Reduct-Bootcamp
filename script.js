
let downPressed = false; 
      let rightPressed = false;
      const box = document.querySelector(".block-square");
document.onkeydown = function(event) {
      const box = document.querySelector(".block-square");
       
        switch (event.keyCode) {
           case 40:
            console.log("down key pressed");
            moveDown()
               break;
           case 39:
            moveRight()
              break;     
        }
    };


// create a simple instance
// by default, it only adds horizontal recognizers
let mc = new Hammer(box);

// listen to events...
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });


mc.on("panright pandown", function(ev) {
    console.log(ev.type +" gesture detected.")
    if (ev.type==="panright"){
        moveRight();
    }
    else if(ev.type==="pandown"){
        moveDown();
    }
    //myElement.textContent = ev.type +" gesture detected.";
});


function moveRight(){
    box.style.display="flex";
    box.style.justifyContent="center";
    rightPressed = true;
    checkCenter();
}

function moveDown(){
    box.style.display="flex";
    box.style.alignItems="center";
    downPressed = true;
    checkCenter();
}

function checkCenter(){
    if (downPressed===true && rightPressed===true){
        document.querySelector(".level-button-hidden").style.display="inline";
    }
}