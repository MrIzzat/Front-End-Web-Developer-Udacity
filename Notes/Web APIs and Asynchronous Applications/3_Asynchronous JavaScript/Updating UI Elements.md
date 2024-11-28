# Dynamic UI Updates

The UI elements of a webpage can be modified based on the content of a promise.

One of the most important use case of chaining promises is dynamically updated the UI based on data from a web API, this refers to modifying DOM elements based on data received. It relies on the basic concepts of selectors in the `JavaScript and The DOM` course.

For example:

If the HTML of page looks like this:

```html
<label for="animal">Enter the name of your favorite animal</label>
<input id="animal" name="animal">
<textarea id="favorite" placeholder="Enter your favorite thing about your favorite animal" rows="9" cols="50"></textarea>
<button id = "generate">GO</button>
```

The JavaScript used to modify the HTML based on promises can be done as follows:


```js
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const newAnimal =  document.getElementById('animal').value;
  const favFact =  document.getElementById('favorite').value;

  getAnimal('/animalData',)
  // New Syntax!
  .then(function(data){
    // Add data
    console.log(data);
    postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:favFact} );
  })
  .then(
    updateUI()
  )
}

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('animalName').innerHTML = allData[0].animal;
    document.getElementById('animalFact').innerHTML = allData[0].facts;
    document.getElementById('animalFav').innerHTML = allData[0].fav;

  }catch(error){
    console.log("error", error);
  }
}
```
Since updating the UI relies on the success of two previous promises, it is placed at the end of the promise chain.