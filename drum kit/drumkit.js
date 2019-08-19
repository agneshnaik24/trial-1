window.addEventListener('keydown', pressKey);

function pressKey(e) {
    // console.log(e.keyCode);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    // console.log(audio);
    if (!audio) {
        return;
    }                        //stop the function
    audio.currentTime = 0;   //rewind to the start
    audio.play();
    // console.log(key);
    key.classList.add('playing');
} 

function removeTransition(e) {
    if (e.propertyName !== 'transform'){
        return;
    }  //skip it if transform not found

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));





