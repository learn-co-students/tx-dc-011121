const BASE_URL = "http://localhost:3000/pups/"

document.addEventListener("DOMContentLoaded", () => {
    fetch(BASE_URL)
        .then(r => r.json())
        .then(pupData => pupData.forEach(renderPupSpan))
})



//Render a span for each pup
function renderPupSpan(pup){
    // Create a span element
    let dogSpan = document.createElement("span")
    // Fill in that span with the pups name
    dogSpan.innerText = pup.name
    //Grab the dog-bar using a DOM method
    //append the span to the dogbar
    document.getElementById("dog-bar").appendChild(dogSpan)

    // Add an eventListener ("click")
    dogSpan.addEventListener('click', () => renderDetails(pup))
    // Make a callback => take the pup info and display it
}


// Click on a span, and have the pups details render
// in the dog-info sections
function renderDetails(pup){


    let dogName = document.createElement("h2")
        dogName.innerText = pup.name
    let dogImg = document.createElement("img")
        dogImg.src = pup.image

    let dogBtn = document.createElement("button")
        dogBtn.id = pup.id
        // if(pup.isGoodDog){
        //     dogBtn.innerText = "Good Dog!"
        // }else {
        //     dogBtn.innerText = "Bad Dog !"
        // }
    dogBtn.innerText = pup.isGoodDog ? "Good Dog!" : "Bad Dog!"
    // Add an event listener to the dog button
    dogBtn.addEventListener("click", toggleGoodDog)
    // When we click update the button, then send the new Val
    // to the server
    // We need the id of the dog, and the toggled value


    let infoSection = document.getElementById("dog-info")
    infoSection.innerHTML = ""
    infoSection.append(dogName, dogImg, dogBtn)
    
  
}

function toggleGoodDog(event){
    
    let toggleVal = {}
    if(event.target.innerText === "Bad Dog!"){
        toggleVal.isGoodDog = true
    }else{
        toggleVal.isGoodDog = false
    }
   
    event.target.innerText === "Bad Dog!" ? event.target.innerText = "Good Dog!" : event.target.innerText = "Bad Dog!"

    let reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify(toggleVal)
    }

    fetch(BASE_URL+event.target.id, reqObj)
    
}