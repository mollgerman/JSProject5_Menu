const links = document.querySelector(".nav-links");
const toggle = document.getElementById("toggle");
let toggleState = "closed"
toggle.addEventListener("click", function() {
    if (toggleState == "closed") {
        toggleState = "opened";
        links.classList.add("show-links");
    } 
    else {
        toggleState = "closed";
        links.classList.remove("show-links")
    }
})