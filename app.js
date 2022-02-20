const links = document.querySelector(".nav-links");
const toggle = document.getElementById("toggle");
let toggleState = "closed"
toggle.addEventListener("click", function() {
    if (toggleState == "closed") {
        toggleState = "opened";
        links.classList.add("show-links");
        toggle.classList.add("transToggle");
    } 
    else {
        toggleState = "closed";
        links.classList.remove("show-links");
        toggle.classList.remove("transToggle");
        
    }
}) 