var lendrum = document.querySelectorAll(".drum").length;
for (i=0; i<lendrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonhtml = this.innerHTML;
        makesound(buttonhtml);
        buttonanimation(buttonhtml);
       
        
});
}

document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonanimation(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
    
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "k":
           var crash = new Audio('sounds/crash.mp3');
           crash.play();
        break;

        case "l":
           var crash = new Audio('sounds/kick-bass.mp3');
           crash.play();
        break;

        default: console.log(key);
    }
}

function buttonanimation(curr_key){
    var activebutton = document.querySelector("."+curr_key);
    activebutton.classList.add("pressed");

    setTimeout(function (){
        activebutton.classList.remove("pressed");
    },100);
}


