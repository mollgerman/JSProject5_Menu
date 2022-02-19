const links = document.querySelector(".nav-links");
const toggle = document.getElementById("toggle");
let toggleState = "closed"
toggle.addEventListener("click", function() {
    if (toggleState == "closed") {
        toggleState = "opened"
        links.style.display = "contents";
    } 
    else {
        toggleState = "closed";
        links.style.display = "none";
    }
})