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


// speel af audio flume
var play1 = document.getElementById("play1");
var pause1 = document.getElementById("pause1");
var audioFlume = new Audio('assets/audio/FlumeHyperreal.mp3');

    play1.addEventListener('click', function() {
        play1.disabled = true;
        pause1.disabled = false;
        audioFlume.play();
    });

    pause1.addEventListener('click', function() {
        play1.disabled = false;
        pause1.disabled = true;
        audioFlume.pause();
    });

    for(i = 0; audioFlume.length; i++) {
        if(audioFlume.ended) {
            audioFlume.currentTime(0);
            play1.disabled = false;
            pause1.disabled = true;
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

// speel af audio  mura masa
var play3 = document.getElementById("play3");
var pause3 = document.getElementById("pause3");
var audioFlume = new Audio('assets/audio/FlumeHyperreal.mp3');

    play3.addEventListener('click', function() {
        play3.disabled = true;
        pause3.disabled = false;
        audioFlume.play();
    });

    pause3.addEventListener('click', function() {
        play3.disabled = false;
        pause3.disabled = true;
        audioFlume.pause();
    });

    for(i = 0; audioFlume.length; i++) {
        if(audioFlume.ended) {
            audioFlume.currentTime(0);
            play3.disabled = false;
            pause3.disabled = true;
        }
    }
