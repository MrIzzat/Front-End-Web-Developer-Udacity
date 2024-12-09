
const myCustomDiv = document.createElement('div');

function respondToClick(event){
    console.log('A paragraph was Clicked: '+ event.target.textContent);
}

for (let i=0; i<200; i++){
    const newParagraph = document.createElement('p');

    newParagraph.textContent = 'This is Pragraph number '+i;

    myCustomDiv.appendChild(newParagraph);
}

myCustomDiv.addEventListener('click', respondToClick);

document.body.appendChild(myCustomDiv);