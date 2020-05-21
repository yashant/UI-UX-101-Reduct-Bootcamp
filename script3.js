let username = document.querySelector(".username").value;
let password = document.querySelector(".password").value;

let pwdlengthOkay = false;
let pwdCapsOkay=false;
const button = document.querySelector(".submit-btn");

document.onkeyup = function(event) {
    username = document.querySelector(".username").value;
    password = document.querySelector(".password").value;
    if ((username.length < 12) || (password.length < 12)){
        pwdlengthOkay = false;
    } 
    else
    {
        pwdlengthOkay = true;
    }
    let pwdChar;
    let upperCount = 0;
    let pwdIllegalChar= true;
    for (let i = 0; i < password.length; i++) {
        pwdChar = password.substr(i , 1);
        if((pwdChar === '1') || (pwdChar === '!') || (pwdChar === '`') || (pwdChar === '~') || (pwdChar === '*') || (pwdChar === '&')){
            pwdIllegalChar= false;
            break;
        }

        if ((isNaN(pwdChar) && (pwdChar == pwdChar.toUpperCase()))) {
            upperCount++;
        }
    }
    if (upperCount === 3){
        pwdCapsOkay= true;
    }
    //console.log("caps ->"+pwdCapsOkay+ " illegal ->" +pwdIllegalChar+ "length ->" + pwdlengthOkay)
    if ((pwdIllegalChar===true) && (pwdlengthOkay===true) && (pwdCapsOkay===true)){
        document.querySelector(".submit-btn").disabled = false;
    }

     

}

