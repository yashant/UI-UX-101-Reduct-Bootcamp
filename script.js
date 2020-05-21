
let downPressed = false; 
      let rightPressed = false;
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

