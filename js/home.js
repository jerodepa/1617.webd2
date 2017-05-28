// responsive nav
var button = document.querySelector(".hamburger"); 
var nav = document.querySelectorAll(".nav__grid__column-5"); 
var count = 0; button.addEventListener("click", openAndClose); 

function openAndClose() { 
    if (count % 2 < 1) { 
        button.src = "assets/icons/escape.png"; 
        for (i = 0; i < nav.length; ++i) { 
            nav[i].style.display = "block"; 
        } count++; 
    } 
    else { 
        button.src = "assets/icons/bars.png"; 
        for (i = 0; i < nav.length; ++i) { 
            nav[i].style.display = "none"; 
        } count++; 
    } 
    }

// kleur bar veranderd bij scroll
var myNav = document.getElementById('topnav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop > 100 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};


// speel af audio figr
var play2 = document.getElementById("play2");
var pause2 = document.getElementById("pause2");
var audioFiGr = new Audio('assets/audio/figrWhatAboutMe.mp3');

    play2.addEventListener('click', function() {
        play2.disabled = true;
        pause2.disabled = false;
        audioFiGr.play();
    });

    pause2.addEventListener('click', function() {
        play2.disabled = false;
        pause2.disabled = true;
        audioFiGr.pause();
    });

    for(i = 0; audioFiGr.length; i++) {
        if(audioFiGr.ended) {
            audioFiGr.currentTime(0);
            play2.disabled = false;
            pause2.disabled = true;
        }
    }

// speel af audio figr
var play2 = document.getElementById("play2");
var pause2 = document.getElementById("pause2");
var audioFiGr = new Audio('assets/audio/figrWhatAboutMe.mp3');

    play2.addEventListener('click', function() {
        play2.disabled = true;
        pause2.disabled = false;
        audioFiGr.play();
    });

    pause2.addEventListener('click', function() {
        play2.disabled = false;
        pause2.disabled = true;
        audioFiGr.pause();
    });

    for(i = 0; audioFiGr.length; i++) {
        if(audioFiGr.ended) {
            audioFiGr.currentTime(0);
            play2.disabled = false;
            pause2.disabled = true;
        }
    }

// speel af audio figr
var play2 = document.getElementById("play2");
var pause2 = document.getElementById("pause2");
var audioFiGr = new Audio('assets/audio/figrWhatAboutMe.mp3');

    play2.addEventListener('click', function() {
        play2.disabled = true;
        pause2.disabled = false;
        audioFiGr.play();
    });

    pause2.addEventListener('click', function() {
        play2.disabled = false;
        pause2.disabled = true;
        audioFiGr.pause();
    });

    for(i = 0; audioFiGr.length; i++) {
        if(audioFiGr.ended) {
            audioFiGr.currentTime(0);
            play2.disabled = false;
            pause2.disabled = true;
        }
    }
