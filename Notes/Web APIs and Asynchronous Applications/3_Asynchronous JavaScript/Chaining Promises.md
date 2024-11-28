# Dependent GET and POST Requests

Then `.then()` function can be used to chain promises. The `fetch()` function is built upon promises so it can use `.then()` directly.


An example:

```js
getAnimal('/fakeAnimalData').then(function (data){//Do a get request
    postData('/addAnimal', {animal: data.animal})// Then a post request
});
```
This code can be added to the server:

```js
app.post('/addAnimal', addAnimal);

function addAnimal(req,res){

  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  console.log(animalData)
}
```

Using chaining avoids the need to nest promises inside of each other with `await`. Chaining promises is a the better practice.