// creating a function 
function playSound(event) { 
    
    //html variables to get the audio and keypress 
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    //if statement - if there is no audio, stop running
    //stops function from running
    if (!audio) return; 
    //rewinds to start 
    audio.currentTime = 0; 
    //calls the function
    audio.play(); 
    //using toggle instead of original "add", because it was getting stuck if you held the key down
    key.classList.toggle('playing'); 
};

//making the yellow border appear/disappear 

//html variable to target the key class
const keys = document.querySelectorAll('.key');

//event listener for key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//creating the function (event listener and callback function)
//if the property name (html properties) is not = to transform, then skip

function removeTransition(event) {
    //skip it if its not a transform
    if (event.propertyName !== 'transform') return; 
    //if the property is transform, then remove class
    this.classList.remove('playing');
};
//event listener for keydown to run function playSound
window.addEventListener('keydown', playSound);
