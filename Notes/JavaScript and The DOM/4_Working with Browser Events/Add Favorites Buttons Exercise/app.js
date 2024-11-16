const cards = document.querySelector('div.contain.contain--none');

const cardChildren = cards.children


//Add *Add to Favorites* button to each card
for (let i=0; i < cardChildren.length; i++){


    let newButton = document.createElement('div');

    newButton.className = "button button--primary";
    newButton.textContent = "Add To Favorites";

    cardChildren[i].firstElementChild.firstElementChild.children[1].appendChild(newButton)

}



for (let i=0; i < cardChildren.length; i++){


    let newButton = document.createElement('div');

    newButton.className = "button button--primary";
    newButton.textContent = "Remove from Favorites";

    cardChildren[i].firstElementChild.firstElementChild.children[1].appendChild(newButton)

    let stars = document.createElement('p');

    stars.textContent = "⭐ ⭐ ⭐";

    newButton.style.display = "None";
    stars.style.display = "None";

    cardChildren[i].firstElementChild.firstElementChild.children[1].appendChild(stars)

}

function handleButtons(event){

    event.preventDefault();

    console.log('TEST');
    if (event.target.textContent == 'Add To Favorites'){
        event.target.style.display = "none";

        event.target.nextElementSibling.style.display = "block";
        event.target.nextElementSibling.nextElementSibling.style.display = "block";
    
        console.log(event.target.nextElementSibling);
    }
    else if (event.target.textContent == 'Remove from Favorites'){
            event.preventDefault();

            event.target.style.display = "none";
        
            event.target.nextElementSibling.style.display = "none";
            event.target.previousElementSibling.style.display = "block";

    }


}

cards.addEventListener("click", handleButtons);


let newButton = document.createElement('div');