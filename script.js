
let downPressed = false; 
      let rightPressed = false;
      const box = document.querySelector(".block-square");
document.onkeydown = function(event) {
      const box = document.querySelector(".block-square");
       
        switch (event.keyCode) {
           case 40:
            console.log("down key pressed");
               box.style.display="flex";
               box.style.alignItems="center";
               downPressed = true; 
               break;
           case 39:
                box.style.display="flex";
                box.style.justifyContent="center";
                rightPressed = true;
              break;     
        }

        if (downPressed===true && rightPressed===true){
            document.querySelector(".level-button-hidden").style.display="inline";
        }

    };


// create a simple instance
// by default, it only adds horizontal recognizers
let mc = new Hammer(box);

// listen to events...
mc.on("panright pandown", function(ev) {
    console.log(ev.type +" gesture detected.")
    //myElement.textContent = ev.type +" gesture detected.";
});

