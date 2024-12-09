# Add Buttons to Select Favorite Nanodegrees

Students often take multiple Nanodegrees so we're thinking about adding a feature to allow them to select their favorites.

In this exercise, we will add buttons to the Nanodegree cards in the section of the page with the list-nanodegrees class.

**Your tasks will involve:**

* Creating and styling the buttons.
* Selecting the right place to add a button to each Nanodegree card.
* Adding the event listener to the correct part of the page. For efficiency, we only want to add one event listener to one element on the page.
* Writing a function to toggle the text on the button between Add to Favorites and Remove from Favorites when the button is clicked
Adding/removing a favorite status indicator, e.g. ⭐ ⭐ ⭐ , to show when a program has been chosen as a favorite.
* Preventing the default action of navigating to the Nanodegree program page when the button is clicked while allowing the default action to proceed when any other part of the button is clicked.

There is a lot to do here! This section will test many of the skills you have used so far:

* Selecting elements
* Creating new elements and appending them to the page
* Updating elements
* Removing elements
* Preventing default actions
* Using event delegation and event targets


### A Few Hints:

* Think about which element to target for your NodeList. You'll want to select an element where you can use appendChild to add the button to the card after the title and before the affiliates.
* Think about where to use preventDefault. You'll want the user to be able to navigate to the Nanodegree page to learn more about it when they click any part of the card other than the button.
Style the buttons using existing classes. The button and button--primary classes will apply the same styles as the rest of the buttons o the page.
* Think outside the box when you are removing the favorite status indicator. There are many ways to do this, but the simplest is to directly target the element you want to remove. You should be familiar with the parent and child properties of the Node Interface(opens in a new tab) -- but did you know that there are sibling properties too?