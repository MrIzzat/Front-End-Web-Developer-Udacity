const link = document.querySelector('#ga-99cff7'); //Selects the My Classroom, blue button in the top right corner of the page    

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Wow! We didn't navigate to a new page!");
});