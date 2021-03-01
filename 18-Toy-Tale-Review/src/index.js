const BASE_URL = "http://localhost:3000/toys/"

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".add-toy-form").addEventListener('submit', createToy)
  
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});



// Fetch all of the toys
  // Make a GET request /toys
  // Take the data from the response and:
  // render a div with the class "card" for each toy
  // the put that div in the "toy-collection" div.
  fetch(BASE_URL)
    .then(res => res.json())
    .then(toyData => toyData.forEach(renderToy))

    // <div class="card">
    //   <h2>Woody</h2>
    //   <img src="toy_image_url" class="toy-avatar" />
    //   <p>4 Likes</p>
    //   <button class="like-btn">Like <3</button>
    // </div>
    // ```

function renderToy(toy){

  // Create a div tag
  const toyDiv = document.createElement('div')
        toyDiv.className = "card"

  const toyName = document.createElement("h2")
        toyName.innerText = toy.name
        
  const toyImg = document.createElement("img")
        toyImg.src = toy.image
        toyImg.className = "toy-avatar"

  const toyLikes = document.createElement('p')
        toyLikes.id = toy.id
        toyLikes.innerText = `${toy.likes} Likes`

  const toyBtn = document.createElement('button')
        toyBtn.innerText = "Like ❤️"
        toyBtn.className = "like-btn"
        toyBtn.dataset.id = toy.id
        toyBtn.dataset.likes = toy.likes
        toyBtn.addEventListener('click', (event) => {
          likeAToy(event)
        })

  toyDiv.append(toyName, toyImg, toyLikes, toyBtn)

  // Grab the toy-collection div

  //append the newDiv to the toy-collection 
  document.getElementById("toy-collection").appendChild(toyDiv)
}

function likeAToy(event){
  console.log(event.target.dataset.id, event.target.dataset.likes)

  // Likes value to increment
  const newLikes = {
    likes: +event.target.dataset.likes + 1
  }

  const reqObj = {
    headers: {"Content-Type": "application/json"},
    method: "PATCH",
    body: JSON.stringify(newLikes)
  }
  
  // The id of the toy that we are trying to update
  fetch(BASE_URL+event.target.dataset.id, reqObj)
    .then(r => r.json())
    .then(updatedToy => {
      event.target.dataset.likes = updatedToy.likes
      document.getElementById(updatedToy.id).innerText = `${updatedToy.likes} Likes`
    }) 

}

function createToy(event){
  event.preventDefault()

  const newToy = {
    name: event.target.toyName.value,
    image: event.target.image.value,
    likes: 0
  }
  
  const reqObj = {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify(newToy)
  }

  fetch(BASE_URL, reqObj)
    .then(r => r.json())
    .then(renderToy)
}
