
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    let restaurantString = "";
    for(let restaurantcount = 0; restaurantcount < restaurants.length; restaurantcount++) {
        const currentrestaurant = restaurants[restaurantcount];
        restaurantString = restaurantString + `<div style = "name: ${currentrestaurant.name}; type: ${currentrestaurant.type}; priceRating: ${currentrestaurant.priceRating} "></div>`
    } 
    return ` 
    <div class="text-center mt-5"> 
        ${restaurantString}
    </div> `
}



function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}