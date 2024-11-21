/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/



const main = document.querySelector('main');

const fillerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
semper in tellus. Sed congue et odio sed euismod.

Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`

const navBarList = document.getElementById("navbar__list");

const navBar = document.querySelector("nav");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


//build the main and build the nav
const paragraphs = fillerText.split("\n\n");

const mainFrag = document.createDocumentFragment();
const barFrag = document.createDocumentFragment();

for (let i=0; i<4 ; i++){

    const section = document.createElement('section');
    section.setAttribute("id",`section${i+1}`);
    section.setAttribute("data-nav",`Section ${i+1}`);


    if(i==0){
        section.setAttribute("class","your-active-class");
    }


    const div = document.createElement('div');
    div.setAttribute('class','landing__container')
    

    const h2 = document.createElement('h2');
    const navBarItem = document.createElement('li');
    const navBarItemAnchor = document.createElement('a');


    h2.textContent = `Section ${i+1}`;
    navBarItemAnchor.textContent = `Section ${i+1}`;
    navBarItemAnchor.setAttribute("href", `section${i+1}`);


    navBarItem.appendChild(navBarItemAnchor);
    barFrag.appendChild(navBarItem);
    div.appendChild(h2);


    for (const p of paragraphs){
        const paragraph = document.createElement('p');
        paragraph.textContent = p;
        div.appendChild(paragraph);
    }
    

    section.appendChild(div);
    mainFrag.appendChild(section);
}

main.appendChild(mainFrag);
navBarList.appendChild(barFrag);





// Add class 'active' to section when near top of viewport

//Based on this https://stackoverflow.com/a/2231268/17870878
$(document).scroll(function() {
    var cutoff = $(window).scrollTop();
    $('#activeSectionAnchor').removeAttr('id');
    $('section').removeClass('your-active-class').each(function() {
        if ($(this).offset().top+250 > cutoff) {
            //console.log(cutoff );
            $(this).addClass('your-active-class');

            const sectionAnchor = document.querySelector(`[href=${this.getAttribute("id")}]`);
            sectionAnchor.setAttribute("id","activeSectionAnchor");

           return false; // stops the iteration after the first one on screen
        }
    });
});






// Scroll to anchor ID using scrollTO event

navBarList.addEventListener("click",(event)=>{
    event.preventDefault();
    // console.log(event.target.nodeName);
    if (event.target.nodeName == "A"){
        let targetName = event.target.getAttribute("href");

        const sectionTarget = document.getElementById(targetName);
    
        sectionTarget.scrollIntoView({behavior: 'smooth', block:'end'});
    }
});


//If scrolling, show nav bar else have the nav bar hidden

let timer = null;

window.addEventListener('scroll', function() {
    if(timer !== null) {
        navBar.style.display = "block";
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
        navBar.style.display = "none"; 
    }, 5000);
});


// Show back to Top Button when too low

const btnToTop = document.querySelector("button");

document.addEventListener("scroll", (event) => {
    //console.log(document.body.getBoundingClientRect().top);
    if(document.body.getBoundingClientRect().top<-1500){
        btnToTop.style.display="block";
    }else{
        btnToTop.style.display="none";
    }
});



// Back to Top Button

btnToTop.addEventListener("click", (event)=>{
    window.scrollTo({top: 0, behavior: "smooth"});
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active




