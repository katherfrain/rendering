
function renderRectangle(rectangle) {
    return `
        <div class="text-center mt-5">
            <div style = "width: ${rectangle.width}px; height: ${rectangle.height}px; background-color: ${rectangle.color};"></div>
        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }
    var rectangleAbstraction2 = {
        width: 500,
        height: 80,
        color: "#FFF00F"
    }
    //this creates an empty string
    let rectangles = ""
    //this puts the <divs> created by RenderRectangle working on RectangleAbstraction into the rectangles string
    rectangles += renderRectangle(rectangleAbstraction);
    //this prints the string as-is. On the first run-through, this will print only RectangleAbstraction
    console.log(rectangles);
    //here we add the <divs> created by renderRectangle working on rectangleAbstraction2 into the rectangles string
    rectangles += renderRectangle(rectangleAbstraction2); 
    //this should log both the html of rectangleAbstraction and rectangleAbstraction2
    console.log(rectangles);
    //this replaces the 'content' html on the live website with the rectangles strings, which are written into the html code
    content.innerHTML = rectangles
}