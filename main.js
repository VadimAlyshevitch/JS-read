// const playBtn = document.getElementById('play-btn'),
//         pauseBtn = document.getElementById('pause-btn'),
//         stopBtn = document.getElementById('stop-btn'),
//         textInput = document.getElementById('text'),
//         speed = document.getElementById('speed');
// let currentCharacter


// playBtn.addEventListener('click', () => {
//     playText(value);
// })

// pauseBtn.addEventListener('click', pauseText)
// stopBtn.addEventListener('click', stopText)
// speed.addEventListener('input', () => {
//     stopText()

//     playText(utterance.text.substring(currectCharter))
// })


// const utterance = new SpeechSynthesisUtterance()
// utterance.addEventListener('end', () => {
//     textInput.disabled = false;
// })

// utterance.addEventListener('boundary', event => {
//     currectCharter = event.charIndex
// })


// function playText(text) {
//     if (speechSynthesis.paused && speechSynthesis.speaking) {
//         return speechSynthesis.resume()
//     }

//     if (speechSynthesis.speaking) return 
//     utterance.text = text
//     utterance.rate = speed.value || 1
//     textInput.disabled = true
//     speechSynthesis.speak(utterance)
// }

// function pauseText() {
//     if (speechSynthesis.speaking) speechSynthesis.pause()
// }

// function stopText() {
//     speechSynthesis.resume()
//     speechSynthesis.cancel()
// }


const playButton = document.getElementById('play-btn')
const pauseButton = document.getElementById('pause-btn')
const stopButton = document.getElementById('stop-btn')
const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')
let currentCharacter

playButton.addEventListener('click', () => {
    playText(textInput.value)
})
pauseButton.addEventListener('click', pauseText)
stopButton.addEventListener('click', stopText)
speedInput.addEventListener('input', () => {
    stopText()
    playText(utterance.text.substring(currentCharacter))
})

const utterance = new SpeechSynthesisUtterance()
utterance.addEventListener('end', () => {
textInput.disabled = false
})
utterance.addEventListener('boundary', e => {
currentCharacter = e.charIndex
})

function playText(text) {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    }
    if (speechSynthesis.speaking) return
    utterance.text = text
    utterance.rate = speedInput.value || 1
    textInput.disabled = true
    speechSynthesis.speak(utterance)
}

function pauseText() {
    if (speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() {
    speechSynthesis.resume()
    speechSynthesis.cancel()
}
