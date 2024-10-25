const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary:
        'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.',
};

// MODEL: creates an animal trading card using concatenation
function createHTMLconcat(animal) {
    const cardHTML =
        '<div class="card">' + '<h3 class="name">' + animal.name +
        '</h3>' + '<img src="' + 'images/' + animal.name +'.png" alt="' + animal.name + '" class="picture">' +
        '<div class="description">' +
        '<p class="fact">' + animal.fact + '</p>' +
        '<ul class="details">' +
        '<li><span class="bold">Scientific Name</span>: ' + animal.scientificName + '</li>' +
        '<li><span class="bold">Average Lifespan</span>: ' + animal.lifespan + '</li>' +
        '<li><span class="bold">Average Speed</span>: ' + animal.speed + '</li>' +
        '<li><span class="bold">Diet</span>: ' + animal.diet + '</li>' +
        '</ul>' +
        '<p class="brief">' + animal.summary + '</p>' +
        '</div>' +
        '</div>';

    return cardHTML;
}

// YOUR CODE: create an idential animal trading card using template literal syntax
function createHTMLtemplateLiteral(animal) {
    const cardHTML = `    
    <div class="card"> 
        <h3 class="name"> ${animal.name}</h3>
        <img src="images/${animal.name}.png" alt=" ${animal.name}'" class="picture"> 
        <div class="description">
            <p class="fact">${animal.fact}</p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>:${animal.scientificName}</li>
                <li><span class="bold">Average Lifespan</span>:${animal.lifespan}</li>
                <li><span class="bold">Average Speed</span>:${animal.speed}</li>
                <li><span class="bold">Diet</span>:${animal.diet}</li>
            </ul>
            <p class="brief">${animal.summary}</p>
        </div>
    </div>`
    return cardHTML;
}

// You can ignore this code for now. You'll learn how to create the code that appends the HTML 
// strings to the web page when you learn how to create content with JavaScript
document.querySelector('.concat').innerHTML = createHTMLconcat(cheetah);

document.querySelector('.template-literal').innerHTML = createHTMLtemplateLiteral(cheetah);
