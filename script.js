// script.js

// NEXT SECTION

function nextSection() {

    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });

}

// SLIDESHOW

let slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {

    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");

}, 3000);

function playAudio(){

    // Background music stop
    let bgMusic = document.getElementById("bgMusic");

    bgMusic.pause();

    // Final surprise audio play
    let audio = document.getElementById("surpriseAudio");

    audio.play();

    // Final text show
    document.getElementById("finalText").style.opacity = "1";

}
// AUTO PLAY MUSIC FIX

window.addEventListener("click", () => {

    let music = document.getElementById("bgMusic");

    music.play();

}, { once: true });