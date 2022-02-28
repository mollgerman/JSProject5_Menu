let menuItems = [
    {
        type: "Starters",
        name: "Toasts with Avocado",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/avocado-on-toast-96e3158.jpg?quality=90&resize=440,400",
        price: "$4.50",
        info: "3 french toast with 150g of avocado."
    },
    {
        type: "Starters",
        name: "Fish and Chips",
        image: "https://www.christinascucina.com/wp-content/uploads/2021/02/fullsizeoutput_ec71-720x720.jpeg",
        price: "$4.50",
        info: "3 french toast with 150g of avocado."
    },
    {
        type: "Starters",
        name: "French Fries",
        image: "https://www.fifteenspatulas.com/wp-content/uploads/2011/09/French-Fries-Recipe.jpg",
        price: "$4.50",
        info: "3 french toast with 150g of avocado."
    },
    {
        type: "Burgers",
        name: "Simple",
        image: "https://nishkitchen.com/wp-content/uploads/2012/02/Beef-Burger-Patty-2-Ways-1B-480x480.jpg",
        price: "$3.60",
        info: "2 medium size baked patatos."
    },
    {
        type: "Burgers",
        name: "Cheddar & Bacon",
        image: "https://www.foodrepublic.com/wp-content/uploads/2012/03/baconcheddarburger_testkitchen.jpg",
        price: "$3.60",
        info: "2 medium size baked patatos."
    },
    {
        type: "Burgers",
        name: "Caramel Onion & Bacon",
        image: "https://sweetiesweet.com/images/recipes/1528926142blue-cheese-and-caramelized-onion-burgers-large.jpg",
        price: "$3.60",
        info: "2 medium size baked patatos."
    },
    {
        type: "Pizzas",
        name: "Simple",
        image: "https://bakerbynature.com/wp-content/uploads/2014/05/IMG_4645.jpg",
        price: "$6.00",
        info: "Portion: 150g."
    },
    {
        type: "Pizzas",
        name: "Pepperony",
        image: "https://sipbitego.com/wp-content/uploads/2021/08/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg",
        price: "$6.00",
        info: "Portion: 150g."
    },
    {
        type: "Pizzas",
        name: "Ham",
        image: "https://scootersjungle.com/valencia/wp-content/uploads/sites/6/2018/08/Pizza-Ham.Pine-073018-589x414.jpg",
        price: "$6.00",
        info: "Portion: 150g."
    },
    {
        type: "Drinks",
        name: "Vodka",
        image: "https://m.media-amazon.com/images/I/71NAQps1xcL._AC_SX466_.jpg",
        price: "$6.00",
        info: "Portion: 150g."
    },
    {
        type: "Drinks",
        name: "Tekila",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vjUvJygmZ33awShQrRVoRgK2DBJURjIhFRTIpNeg6Guf9Niy9ggmAAU6YqPcIS8_DIc&usqp=CAU",
        price: "$6.00",
        info: "Portion: 150g."
    },
    {
        type: "Drinks",
        name: "Coke",
        image: "https://c.stocksy.com/a/53g400/z9/1114951.jpg",
        price: "$6.00",
        info: "Portion: 150g."
    },
    {
        type: "Drinks",
        name: "Beer",
        image: "https://cb.scene7.com/is/image/Crate/PortlandBeer22ozSHS16/$web_pdp_main_carousel_med$/190411135344/portland-beer-glass.jpg",
        price: "$6.00",
        info: "Portion: 150g."
    }
    
   
]

const menu = document.querySelector(".menu");
const catego = document.querySelector(".nav-links");


let display = "All";

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menuItems, display);
    displayMenuButtons(menuItems);
})

function displayMenuButtons(menuItems){
    let categories = menuItems
        .map(item => item.type)
        .reduce(function (values, item) {
            if (!values.includes(item)) {
                values.push(item)
            }
            return values;
        },["All"]);
    
    const categoriesBtns = categories
        .map(function(cat) {
            return `<li>
                        <a class="btns" data-id="${cat}">${cat}</a>
                    </li>`;
        })
        .join('')
    catego.innerHTML = categoriesBtns 
    
const filters = catego.querySelectorAll(".btns");
console.log(filters)
filters.forEach(function (btn) {
    console.log(btn.innerHTML)
    btn.addEventListener("click", function () {
        display = btn.innerHTML;
        console.log(display)
        displayMenuItems(menuItems, display);
    })
})      
}

function displayMenuItems(menuItems, display){
    let toDisplay = (display == "All") ? menuItems 
            : menuItems.filter(item => item.type === display);

    let itemMenu = toDisplay.map(function (item) {
        return `<div class="container">
                <h2 style="text-align:center">${item.name}</h2>
                <img src="${item.image}" alt="">
                <p style="text-align:center">${item.info}</p>
                <h3 style="text-align:center">${item.price}</h3>
                </div>`;
    })
    .join('')
    menu.innerHTML = itemMenu;
}

