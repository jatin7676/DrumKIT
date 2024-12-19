/*document.querySelectorAll("button"). forEach(button => {
   button.addEventListener("click",handleclick );
    
});  

function handleclick(){
    alert("i got clicked");
}
    */

// simple for loop

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerhtml = this.innerHTML;
        make_sound(buttoninnerhtml);
        buttonflash(buttoninnerhtml);

        /* if(this.innerHTML=="w"){
             var audio = new Audio("sounds/tom-1.mp3");
         audio.play();
 
         }
         if(this.innerHTML=="a"){
             var audio = new Audio("sounds/tom-2.mp3");
         audio.play();
         }
 
         if(this.innerHTML=="s"){
             var audio = new Audio("sounds/tom-3.mp3");
         audio.play();
         }
         if(this.innerHTML=="d"){
             var audio = new Audio("sounds/tom-4.mp3");
         audio.play();
         }
         if(this.innerHTML=="j"){
             var audio = new Audio("sounds/snare.mp3");
         audio.play();
         }
         if(this.innerHTML=="k"){
             var audio = new Audio("sounds/crash.mp3");
         audio.play();
         }
         if(this.innerHTML=="l"){
             var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();
         }
 */



    });

}

document.addEventListener("keypress", function (event) {
    make_sound(event.key)
    buttonflash(event.key);

});




function make_sound(key) {
    if (key == "w") {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();

    }
    if (key == "a") {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }

    if (key == "s") {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    if (key == "d") {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    if (key == "j") {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    if (key == "k") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    if (key == "l") {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }


}
function buttonflash(currkey) {
    var currbutton = document.querySelector("." + currkey);
    currbutton.classList.add("pressed");


    setTimeout(function () {
        currbutton.classList.remove("pressed");
    }, 100);
}

