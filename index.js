let buttonPressed
document.addEventListener("keypress", function(event){
    buttonPressed = event.key
    soundBoard(buttonPressed)
    activeButtonAnimation(buttonPressed)
})


let numberOfDrum = document.querySelectorAll(".drum").length;
for(let i = 0 ; i < numberOfDrum ; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click" , function sendAlert(){
        buttonPressed = this.innerHTML;
        soundBoard(buttonPressed)
        activeButtonAnimation(buttonPressed)

    })


}

function soundBoard(buttonPressed){
    let sound

    switch (buttonPressed) {
        
        case 'w':
            sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;

        case 'a':
            sound = new Audio("./sounds/tom-2.mp3")
            sound.play();
            break;
        
        case 's':
            sound = new Audio("./sounds/tom-3.mp3")
            sound.play();
            break;

        case 'd':
            sound = new Audio("./sounds/tom-4.mp3")               
            sound.play();
            break;

        case 'j':
            sound = new Audio("./sounds/snare.mp3")
            sound.play();
            break;

        case 'k':
            sound = new Audio("./sounds/kick-bass.mp3")
            sound.play();
            break;

        case 'l':
            sound = new Audio("./sounds/crash.mp3")
            sound.play();
            break;

        default:
            break;
    }
}

function activeButtonAnimation(buttonPressed){
    document.querySelector("."+buttonPressed).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("."+buttonPressed).classList.remove("pressed")
    } , 500)
    

}