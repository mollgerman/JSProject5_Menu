const links = document.querySelector(".nav-links");
const quitModal = document.querySelector(".quit-modal");
const toggle = document.getElementById("toggle");
const qr = document.getElementById("qr");
const qrModal = document.getElementById("qrmodal");
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
qr.addEventListener("click", function(){
    if (!qrModal.classList.contains("modal-show")) {
        qrModal.classList.add("modal-show");
    }
})
quitModal.addEventListener("click", function(){
    if (qrModal.classList.contains("modal-show")) {
        qrModal.classList.remove("modal-show");
    }
})