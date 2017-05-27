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
            nav[i].style.display = "none"; } count++; 
        } 
    }