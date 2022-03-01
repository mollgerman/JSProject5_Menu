/* COMMENTS IN ENGLISH AND SPANISH // COMENTARIOS EN INGLES Y ESPAÑOL */

/* The purpose of this project is to make a restaurant menu that displays info dynamically 
    depending on the data provided by a database. This proyect is focused on javaScript.
    It filters the items categories and displays them in form of filter buttons so the user
    can filter the items.
    The items are also displayed dynamically by mapping every object from the database.

    //

    El propósito de este projecto es hacer un menu de restaurante que muestre información 
    dinámicamente dependiendo de la información proveída de la base de datos. Este proyecto 
    está enfocado en javaScript.
    Se filtra las categorias de los items y se muestran en forma de botones de filtrado,
    de esta manera el usuario puede filtrar los items.
    Los items tambien son mostrados dinámicamente "mapeando" cada objeto de la base de datos.
*/

const links = document.querySelector(".nav-links");
const quitModal = document.querySelector(".quit-modal");
const toggle = document.getElementById("toggle");
const qr = document.getElementById("qr");
const qrModal = document.getElementById("qrmodal");
const shareButton = document.querySelector('.share-button');
const shareOptions = document.querySelector('.shareOptions');
let toggleState = "closed";

/* EVENT LISTENER FOR "+" RESPONSIVE NAVBAR BUTTON // 
    EVENT LISTENER PARA EL BOTON "+" DE LA RESPONSIVE NAVBAR */
toggle.addEventListener("click", function() {
    if (toggleState == "closed") {
        toggleState = "opened";
        /* RESPONSIVE LINKS HEIGHT CALCULATOR // 
            CALCULADOR DE RESPONSIVE LINKS HEIGHT */
        let linksHeight = (3 * categories.length) + 'rem';
        links.style.height = linksHeight;
        links.style.visibility = "visible";
        shareOptions.classList.add("showShareOptions");
        toggle.classList.add("transToggle");
    } 
    else {
        toggleState = "closed";
        links.style.height = 0;
        links.style.visibility = "hidden";
        toggle.classList.remove("transToggle");
        shareOptions.classList.remove("showShareOptions");
    }
})  


/* RESPONSIVE NAVBAR TRANSITION FIX  // 
    ARREGLO PARA LA TRANSICION DEL RESPONSIVE NAVBAR */
window.addEventListener('resize', function() {
    console.log(this.window.innerWidth )
    if (this.window.innerWidth >= 900) {
        links.style.height = "auto";
        links.style.visibility = "visible";
    }
    else {
        toggleState = "closed";
        links.style.height = 0;
        links.style.visibility = "hidden";
        toggle.classList.remove("transToggle");
        shareOptions.classList.remove("showShareOptions");

    }
});


/* MODAL EVENT LISTENER // EVENT LISTENER DE LA VENTANA EMERGENTE */
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


/* SHARE EVENT LISTENER // EVENT LISTENER DEL BOTÓN DE COMPARTIR */
shareButton.addEventListener('click', event => {
    if (navigator.share) { 
     navigator.share({
        title: 'Restaurant Menu',
        url: 'https://mollgerman.github.io/JSProject5_Menu/'
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
      } else {
          shareDialog.classList.add('is-open');
      }
  });