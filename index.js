

// function w(){
//     var audio = new Audio('./sounds/tom-1.mp3');
//     audio.play();
// }

// function a(){
//     var audio = new Audio('./sounds/tom-2.mp3');
//     audio.play();
// }

// function s(){
//     var audio = new Audio('./sounds/tom-3.mp3');
//     audio.play();
// }

// function d(){
//     var audio = new Audio('./sounds/tom-4.mp3');
//     audio.play();
// }

// function j(){
//     var audio = new Audio('./sounds/kick-bass.mp3');
//     audio.play();
// }

// function k(){
//     var audio = new Audio('./sounds/snare.mp3');
//     audio.play();
// }

// function l(){
//     var audio = new Audio('./sounds/crash.mp3');
//     audio.play();
// }

function makeSound(key){

    switch (key) {
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3'); 
            audio.play();
            
            break;
    
        case 'a':           
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        
        case 's':        
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        
        case 'd':      
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        
        case 'j':         
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        
        case 'k':         
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        
        case 'l':       
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        
        default:
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
         
    }

}


var numOfButton = document.querySelectorAll("button").length;

for(i=0; i<numOfButton; i++)
{   

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var textBtn = this.innerHTML;
        makeSound(textBtn);

        buttonAnimation(textBtn);
    });
}

    document.addEventListener("keydown",function(event){

            makeSound(event.key);
            buttonAnimation(event.key);
    }); 


    function buttonAnimation(currentKey){

            var activeButton = document.querySelector("." + currentKey);
            activeButton.classList.add("pressed");

            setTimeout(() => {
                
            activeButton.classList.remove("pressed")}, 100);
    }

    // if(i==0){
    //     document.querySelectorAll(".drum")[i].addEventListener("click",w);
    // }
    // else if(i==1)
    // {
    //     document.querySelectorAll(".drum")[i].addEventListener("click",a);
    // }
    // else if(i==2)
    // {
    //     document.querySelectorAll(".drum")[i].addEventListener("click",s);
    // }
    // else if(i==3)
    // {
    //     document.querySelectorAll(".drum")[i].addEventListener("click",d);
    // }
    // else if(i==4)
    // {
    //     document.querySelectorAll(".drum")[i].addEventListener("click",j);
    // }
    // else if(i==5)
    // {
    //     document.querySelectorAll(".drum")[i].addEventListener("click",k);
    // }
    // else if(i==6)
    // {
    //     document.querySelectorAll(".drum")[i].addEventListener("click",l);
    // }







