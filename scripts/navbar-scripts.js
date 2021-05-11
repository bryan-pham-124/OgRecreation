
var icon = document.getElementsByClassName("icon")[0];

console.log(icon);

var x = document.getElementById("myLinks");
 

//alert(x);


function myFunction() { // handles dropdown function
    
    console.log('click');
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    
    }
}



 
var elementIsClicked = false; // declare the variable that tracks the state
var splash_image = document.getElementsByClassName("splash-image")[0];
var address_main = document.getElementsByClassName("address-main")[0];
var chevron = document.getElementsByClassName("chevron")[0];
var clickCounter = 0; 




function clickHandler(){ // declare a function that updates the state
    
    
    var width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    console.log(width)
 
    if(width < 1176) {
        elementIsClicked = true;
        clickCounter++;
        if(clickCounter % 2 == 0){
            splash_image.style.display = "block";
            address_main.style.display = "block";
            chevron.style.display = "flex";
        } else  {
            splash_image.style.display = "none";
            address_main.style.display = "none";
            chevron.style.display = "none";
        }
    }
    else {
        splash_image.style.display = "block";
        address_main.style.display = "block";
        chevron.style.display = "flex";
    }
  
}



icon.addEventListener("click", myFunction);
icon.addEventListener("click", clickHandler);