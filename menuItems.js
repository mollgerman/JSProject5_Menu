let menuItems = [
    {
        type: "Starter",
        name: "Toasts with Avocado",
        image: "qrMenu.png",
        price: "$4.50",
        info: "3 french toast with 150g of avocado."
    },
    {
        type: "Starter",
        name: "Baked Potato",
        image: "qrMenu.png",
        price: "$3.60",
        info: "2 medium size baked patatos."
    },
    {
        type: "Starter",
        name: "Steak Fries",
        image: "qrMenu.png",
        price: "$6.00",
        info: "Portion: 150g."
    },
    {
        type: "Starter",
        name: "Steak Fries",
        image: "qrMenu.png",
        price: "$6.00",
        info: "Portion: 150g."
    }
    
   
]

const starters = document.querySelector(".starters");

window.addEventListener("DOMContentLoaded", () => {
    let itemMenu = menuItems.map(function (item) {
        console.log(item)
        return `<div class="container">
                <h2 style="text-align:center">${item.name}</h2>
                <img src="${item.image}" alt="">
                <p style="text-align:center">${item.info}</p>
                <h3 style="text-align:center">${item.price}</h3>
                </div>`;
    })
    starters.innerHTML = itemMenu;
})

/*function newItem (item) {
    let 
    starters.innerHTML = 
    `<div class="container">
        <h1>${menuItems[item].name}</h1>
        <img src="" alt="">
        <p></p>
        <h3></h3>
    </div>`
}*/