An example of a base API URL would look like this:

`http://api.animalinfo.org/data/?animal=`

The `?animal=` part is known as the query. It were set to a specific value, it would process the HTTP request based on that query value.


An example of client side code that requests some animal dynamically from a dummy API:


```js

let baseURL = 'http://api.animalinfo.org/data/?animal=';
let apiKey = '&appid=9f15e45060...';// An example of how credentials might look like

document.getElementById('generate').addEventListener('click', performAction);// To dynamically get the query value based on user input

function performAction(event){
    const newAnimal = document.getElementById('animal').value;
    getAnimal(baseURL, newAnimal, apiKey);
}

const getAnimal = async (baseURL, animal, key) => {
    const res = await fetch(baseURL+animal+key);

    try{
        
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (error){
        console.log(`Error: ${error}`);
    }
}
```