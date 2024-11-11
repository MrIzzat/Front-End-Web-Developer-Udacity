const hero = document.querySelector('.hero__module');


const heroFunction = () => {
    console.log("Removed Last Child");
    hero.lastElementChild.remove();
    hero.removeEventListener('mouseover',heroFunction);
};

hero.addEventListener('mouseover', heroFunction);