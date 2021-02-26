# Pokemon: The SPA

  In this lecture we will be building a "single page application" , using everything we have learned about JavaScript up until this point:
  - DOM Manipulation
  - Event Listeners
  - Server Communication

## Click and Render

As a user, when I click the monsters button, I should see a list of pokemon.
- Add an event listener to the button
- Define a callback for the click event listener which will fetch the pokemon data
- When we get data back from the server, what does it look like? Do we need to split up an array or no?
- When we get server data, we will need another function to render that data.

## Create a New Pokemon
As a user, when I enter a pokemon's info and submit the form I will see that pokemon on the browser as well as the backend.
- Grab the form using a DOM method and add an **'submit'** event listener to  **'form'**
- Don't forget to prevent the default behavior of a submit event
- Next, extract the values from the form using the event object, and set those values to a new object that you will end to the server. 

 ```js
  let newPokemon = {
	  name: "this will come from the submit event",
	  sprite: "this will come from the submit event"
  }
```
- When we have created the new object we will send to our server, we have to create ANOTHER object that will contain our newPokemon, as well as other metadata the server needs to know about

 ```js
  let reqObj = {
	  headers: {"Content-Type": "application/json"},
	  method: "POST",
	  body: JSON.stringify(newPokemon)
  }
```

- Now we are ready to make our POST fetch call. We use the URL of the resource we want to post to, then use the response (which should be a new pokemon with an id) to render the new pokemon to the DOM... but only AFTER we get a valid response from the server. This is known as pessimistic rendering.

 ```js
  fetch("http://localhost:3000/pokemon", reqObj)
	  .then(res => res.json())
	  .then((newPokemon) => renderPokemon(newPokemon))
```

## Increment Pokemon Likes
As a user, when I click on the pokemon's like button. I should see that pokemon's likes increment on the DOM as well as the backend.
- When the pokemon cards render, they should render with a button
- Add a 'click' event listener to the button.
- Define a callback for the event listener which will use the event to extract the likes AND that pokemon's ID from the DOM.
- Using the likes from the DOM we will create a "newLikes" object to send to the server. When updating a resource we need the ID of the resource, as well as to match the key of the attribute we are trying to update

 ```js
 let  newLikes  =  {
			likes:  +event.target.innerText.split("  ")[1] +  1
}
```

- We are once again sending data to our server so like when we created a new pokemon, we have to send an object along with the request. What differs here is the method within that object. Instead of a 'POST' method, it will be a 'PATCH'

 ```js
 let  reqObj  =  {
			headers:  {"Content-Type":  "application/json"},
			method:  "PATCH",
			body:  JSON.stringify(newLikes)
}
```

- Once we have the newlikes, request object, as well as the id of the pokemon we want to update, we can make our fetch. Like before, we will use the response from the request to update the DOM. Like before, we will use the data from the response, which should be our updated pokemon, to then update the DOM. 

 ```js
fetch(BASE_URL  +  event.target.id,  reqObj)
		.then(r  =>  r.json())
		.then(updatedPokemon  =>  {
		document.getElementById(updatedPokemon.id).innerText  =  `Likes: ${updatedPokemon.likes}`
})
```

## Delete a Pokemon
