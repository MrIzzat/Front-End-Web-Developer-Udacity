
let baseURL = 'http://api.animalinfo.org/data/?animal=';
let apiKey = '&appid=9f15e45060...';// An example of how credentials might look like

document.getElementById('generate').addEventListener('click', performAction);// To dynamically get the query value based on user input

function performAction(event){
    const newAnimal = document.getElementById('animal').value;
    getAnimal(baseURL, newAnimal, apiKey);
}

const getAnimal = async (baseURL, animal, key) => {
    // const res = await fetch(baseURL+animal+key);
    const res = await fetch("/fakeAnimal");
    try{
        
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (error){
        console.log(`Error: ${error}`);
    }
}