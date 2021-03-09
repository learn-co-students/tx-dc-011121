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

    let hobbySection = document.createElement("ul")
    
    pup.hobbies.forEach((hobby) => {
        // define the li
        let li = document.createElement("li")
        // populate the li with the hobby
        li.innerText = hobby 
        // append the li to the Ul
        hobbySection.appendChild(li)

        let btn = document.createElement("button")
            btn.innerText = "X"
            btn.addEventListener('click', (event) => {
                // event.target.parentNode.remove()
                console.log(event.target.parentNode.innerText);
                let newArray = pup.hobbies.filter(hobby => hobby+"X"  !== event.target.parentNode.innerText)

                let newHobbies = {
                    hobbies: newArray
                }

                let reqObj = {
                    headers: {"Content-Type": "application/json"},
                    method: "PATCH",
                    body: JSON.stringify(newHobbies)
                }
                console.log(reqObj)
                fetch(BASE_URL+pup.id, reqObj)
                    .then(r => r.json())
                    .then(() => event.target.parentNode.remove())
            })
            li.appendChild(btn)

    })

  

    let infoSection = document.getElementById("dog-info")
    infoSection.innerHTML = ""
    infoSection.append(dogName, dogImg, dogBtn, hobbySection, renderForm(pup))
    
  
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


function renderForm(pup){
    console.log(pup)
    let form = document.createElement("form")
    let hobbyInput = document.createElement("input")
        hobbyInput.type = "text"
        hobbyInput.name = "hobbyName"

    let submitBtn = document.createElement("input")
        submitBtn.type = "submit"

    form.append(hobbyInput, submitBtn)

    form.addEventListener("submit", (event) => addHobby(event, pup))

    return form
}

function addHobby(event, pup) {
    event.preventDefault()
    console.log(pup.hobbies)
    // let hobbySection = document.querySelector("ul")

    //  let li = document.createElement("li")
    //     // populate the li with the hobby
    //     li.innerText = event.target.hobbyName.value
    //     // append the li to the Ul
    //     hobbySection.appendChild(li)


        let newHobbies = {
            hobbies: [...pup.hobbies, event.target.hobbyName.value]
        }
        // We need the dog id, and new object to send to server
        let reqObj = {}
            reqObj.headers = {"Content-Type": "application/json"}
            reqObj.method = "PATCH"
            reqObj.body = JSON.stringify(newHobbies)

        fetch(BASE_URL+pup.id, reqObj)
            .then(r => r.json())
            .then((pup) => renderDetails(pup))

}