const links = document.querySelector(".nav-links");
const quitModal = document.querySelector(".quit-modal");
const toggle = document.getElementById("toggle");
const qr = document.getElementById("qr");
const qrModal = document.getElementById("qrmodal");
const shareButton = document.querySelector('.share-button');
const shareOptions = document.querySelector('.shareOptions');
let toggleState = "closed"
toggle.addEventListener("click", function() {
    if (toggleState == "closed") {
        toggleState = "opened";
        links.classList.add("show-links");
        shareOptions.classList.add("showShareOptions");
        toggle.classList.add("transToggle");
    } 
    else {
        toggleState = "closed";
        links.classList.remove("show-links");
        toggle.classList.remove("transToggle");
        shareOptions.classList.remove("showShareOptions");
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


shareButton.addEventListener('click', event => {
    if (navigator.share) { 
     navigator.share({
        title: 'WebShare API Demo',
        url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
      } else {
          shareDialog.classList.add('is-open');
      }
  });