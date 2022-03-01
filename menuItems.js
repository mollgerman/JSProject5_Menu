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

/* SIMULATION OF BACKEND DATABASE // SIMULACION DE BASE DE DATOS BACKEND */
let menuItems = [
    {
        type: "Starters",
        name: "Toasts with Avocado",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/avocado-on-toast-96e3158.jpg?quality=90&resize=440,400",
        price: "$4.00",
        info: "3 french toast with 150g of avocado."
    },
    {
        type: "Starters",
        name: "Fish and Chips",
        image: "https://www.christinascucina.com/wp-content/uploads/2021/02/fullsizeoutput_ec71-720x720.jpeg",
        price: "$4.50",
        info: "Portion: 90g."
    },
    {
        type: "Starters",
        name: "French Fries",
        image: "https://www.fifteenspatulas.com/wp-content/uploads/2011/09/French-Fries-Recipe.jpg",
        price: "$4.50",
        info: "Portion: 100g."
    },
    {
        type: "Burgers",
        name: "Simple",
        image: "https://nishkitchen.com/wp-content/uploads/2012/02/Beef-Burger-Patty-2-Ways-1B-480x480.jpg",
        price: "$5.99",
        info: "170g patty with an slice of cheese, tomato and lettuce."
    },
    {
        type: "Burgers",
        name: "Cheddar & Bacon",
        image: "https://makeyourmeals.com/wp-content/uploads/2020/05/bacon-cheeseburger-featured-720x540.jpg",
        price: "$7.30",
        info: "200g patty with bacon and cheddar."
    },
    {
        type: "Burgers",
        name: "Caramel Onion & Bacon",
        image: "https://static.onecms.io/wp-content/uploads/sites/52/2018/05/21/two-cheese-bacon-burger-creamy-caramelized-onion-sauce-0617-103010848.jpg",
        price: "$6.60",
        info: "200g patty with caramel onion and bacon."
    },
    {
        type: "Pizzas",
        name: "Simple",
        image: "https://bakerbynature.com/wp-content/uploads/2014/05/IMG_4645.jpg",
        price: "$8.00",
        info: "For 3 people."
    },
    {
        type: "Pizzas",
        name: "Pepperony",
        image: "https://sipbitego.com/wp-content/uploads/2021/08/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg",
        price: "$10.00",
        info: "For 3 people."
    },
    {
        type: "Pizzas",
        name: "Ham",
        image: "https://scootersjungle.com/valencia/wp-content/uploads/sites/6/2018/08/Pizza-Ham.Pine-073018-589x414.jpg",
        price: "$12.00",
        info: "For 3 people."
    },
    {
        type: "Drinks",
        name: "Vodka",
        image: "https://m.media-amazon.com/images/I/71NAQps1xcL._AC_SX466_.jpg",
        price: "$12.50",
        info: "20ml shot."
    },
    {
        type: "Drinks",
        name: "Tekila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vjUvJygmZ33awShQrRVoRgK2DBJURjIhFRTIpNeg6Guf9Niy9ggmAAU6YqPcIS8_DIc&usqp=CAU",
        price: "$9.00",
        info: "Portion: 20ml shot."
    },
    {
        type: "Drinks",
        name: "Coke",
        image: "https://c.stocksy.com/a/53g400/z9/1114951.jpg",
        price: "$3.00",
        info: "750ml"
    },
    {
        type: "Drinks",
        name: "Beer",
        image: "https://cb.scene7.com/is/image/Crate/PortlandBeer22ozSHS16/$web_pdp_main_carousel_med$/190411135344/portland-beer-glass.jpg",
        price: "$6.00",
        info: "1l."
    },
    {
        type: "Desserts",
        name: "Ice Cream",
        image: "https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-7.jpg",
        price: "$7.00",
        info: "Portion: 180g."
    },
    {
        type: "Desserts",
        name: "Cherry Pie",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-06-How-to-Make-Cherry-Pie-with-Fresh-Summer-Cherries%2FHow-to-Make-Easy-Foolproof-Cherry-Pie-with-Fresh-Summer-Cherries_045",
        price: "$10.00",
        info: "Portion: 100g."
    }
    
   
]

const menu = document.querySelector(".menu");
const catego = document.querySelector(".nav-links");
let display = "All";

/* FILTER CATEGORIES // FILTRAR CATEGORIAS */
let categories = menuItems
        .map(item => item.type)
        .reduce(function (values, item) {
            if (!values.includes(item)) {
                values.push(item);
            }
            return values;
        },["All"]);


/* WHEN DOM IS LOADED DISPLAY BUTTONS AND ITEMS // CUANDO EL DOM HAYA CARGADO MOSTRAR BOTONES E ITEMS */
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menuItems, display);
    displayMenuButtons(menuItems);
})


function displayMenuButtons(menuItems){
    const categoriesBtns = categories
        .map(function(cat) {
            return `<li>
                        <a class="btns" data-id="${cat}">${cat}</a>
                    </li>`;
        })
        .join('');
    catego.innerHTML = categoriesBtns;
    const filters = catego.querySelectorAll(".btns");
    filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
        display = btn.innerHTML;
        displayMenuItems(menuItems, display);
    })
})      
}


function displayMenuItems(menuItems, display){
    let toDisplay = (display == "All") ? categories.filter(item => item != "All") 
            : categories.filter(item => item === display);
    let itemMenu = [];
    toDisplay.forEach(category => {
        itemMenu.push(`<div class="type">${category}</div>`)

        let items = menuItems
            .filter(item => item.type === category)        
            .map(function (item) {
                return `<div class="container">
                            <h2 style="text-align:center">${item.name}</h2>
                            <img src="${item.image}" class="imgs" alt="">
                            <p style="text-align:center; margin:0.8rem;">${item.info}</p>
                            <h3 style="text-align:center">${item.price}</h3>
                        </div>`;
            })      
            .join('');
        itemMenu.push(items);
    })
    itemMenu = itemMenu.join('')
    menu.innerHTML = itemMenu;
}

