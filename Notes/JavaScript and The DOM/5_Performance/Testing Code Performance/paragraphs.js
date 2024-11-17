
const t0 = performance.now();
for (let i=0; i<200; i++){
    const newElement = document.createElement('p');

    newElement.textContent = 'This is paragraph number ' +i;

    document.body.appendChild(newElement);
}

const t1 = performance.now();



const t2 = performance.now();

const customDiv = document.createElement('p');

for (let i=0; i<200; i++){
    const newElement = document.createElement('p');

    newElement.innerText= 'This is pargraph number ' + i;

    customDiv.appendChild(newElement);
}

document.body.appendChild(customDiv);

const t3 = performance.now();


console.log(`Adding Pragraphs Directly to body took ${t1-t0} milliseconds
Adding Paragraphs to Container took ${t3-t2} milliseconds`);
