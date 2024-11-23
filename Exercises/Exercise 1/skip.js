const paragraph = document.createElement('p');
paragraph.textContent = "I LOVE web development";
paragraph.style.color = "green";

const container = document.getElementsByClassName('container')[0];

container.appendChild(paragraph);

const paragraph2 = document.createElement('p');
paragraph2.textContent = "Button Clicked";
paragraph2.style.color = "orange";
paragraph2.style.display = "none"

paragraph2.addEventListener("mouseover", (event) => {
    paragraph2.style.color = "blue";
});


paragraph2.addEventListener("mouseout", (event) => {
    paragraph2.style.color = "orange";
});


const button = document.getElementById("clicked");

// button.addEventListener("mouseover", (event) => {
//     button.style.color = "red";
// });


// button.addEventListener("mouseout", (event) => {
//     button.style.color = "black";
// });

// button.addEventListener("click", (event) =>{
//     console.log("Clicked");
// });

button.addEventListener("click", (event) =>{
    paragraph2.style.display = "block";
    container.appendChild(paragraph2);
});
