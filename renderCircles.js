function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    
    let htmlString = "";
    for(let circle = 0; circle < circles.length; circle++) {
        const currentcircle = circles[circle];
        htmlString = htmlString + `<div style = "height: ${currentcircle.radius*2}px; width: ${currentcircle.radius*2}px; border-radius: ${currentcircle.radius}px; background-color: ${currentcircle.color}"></div>`
        }
    return ` 
    <div class="text-center mt-5"> 
        ${htmlString}
    </div> `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}

