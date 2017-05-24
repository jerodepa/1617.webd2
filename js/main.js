// responsive nav
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav__nav") {
        x.className += " responsive";
    } else {
        x.className = "nav__nav";
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
// play audio

var audioBtn = document.getElementById('knop1');
var audioBtnTwo = document.getElementById('knop2');
var audioBtnThree = document.getElementById('knop2');



audioBtn.onclick = function() {
  audioFlumePause();
} 

function audioFlumePause() {
    var flumeSong = new Audio('assets/audio/flumeHyperreal.mp3');
    var isPlay = true;
    

    if(isPlay = true) {
        flumeSong.play();
        audioBtn.onclick = function() {
            flumeSong.pause();
        }
    }
}

