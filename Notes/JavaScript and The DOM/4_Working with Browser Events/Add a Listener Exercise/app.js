const mainHeading = document.querySelector('h1');

mainHeading.addEventListener("mouseover", (event) => {
    mainHeading.textContent = "Build an AR App";
});

mainHeading.addEventListener("mouseout", (event) => {
    mainHeading.textContent = "learnARKit";
})