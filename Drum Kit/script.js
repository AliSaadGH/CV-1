document.addEventListener('keypress', play)
        
function play(event) {
    var key = event.key // A variable to hold the pressed key
    getCorrectKey(key)

    if (key == 'w') {
        playAudio('sounds/tom-1.mp3')
    }

    else if (key == 'a') {
        playAudio('sounds/tom-2.mp3')  
    }

    else if (key == 's') {
        playAudio('sounds/tom-3.mp3')
    }

    else if (key == 'd') {
        playAudio('sounds/tom-4.mp3')
    }

    else if (key == 'j') {
        playAudio('sounds/snare.mp3')
    }

    else if (key == 'k') {
        playAudio('sounds/kick-bass.mp3')
    }

    else if (key == 'l') {
        playAudio('sounds/crash.mp3')
    }

    else {
        getIncorrectKey()
    }

}

// Function to paly the audio
function playAudio(note) {
    var audio = new Audio(note);
    audio.play()
}

// Function to get the correct pressed key
function getCorrectKey(key) {
    document.getElementById('key').innerHTML = 'Pressed Key: ' + key;
    document.getElementById('key').style.color = 'white';
}

// Function to get the incorrect pressed key
function getIncorrectKey() {
    document.getElementById('key').innerHTML = 'Invalid key!';
    document.getElementById('key').style.color = 'red';
}

