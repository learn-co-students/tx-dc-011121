

// Closures
// function makeFunc() {
//     let message = "Closures are cool!"
//     function displayMessage(){
//         console.log(message);
//     }
//     return displayMessage
// }

// const newFunc = makeFunc()
// newFunc()

//Closures Emulating Private methods
// const counter = function(){
//     let privateCounter = 0
//     function changeVal(val){
//         privateCounter += val
//     }
//     return {
//         increment: function(){
//             changeVal(1)
//         },
//         decrement: function(){
//             changeVal(-1)
//         },
//         value: function () {
//             return privateCounter;
//         }
//     }
// }()

// console.log(counter.value());
// console.log(counter.increment());
// console.log(counter.value());


// function getAllRows() {
//     let rows = document.querySelectorAll('tr')
//     rows.forEach(row => callBack(row))
//     return rows
// }

// console.log(getAllRows())

// function callBack(row) {
//     row.innerText = "Adam did a thing"
// }


// Returns the FIRST node that meets the selector passedIN
// Return a single node
// document.querySelector()

// // Returns ALL nodes that meet the selector passed IN
// // Return a node LIST
// // nodes we can iterators
// document.querySelectorAll()

// //This returns an HTML based on the class name passed in
// // Cant use iterators on
// document.getElementsByClassName()

//create DOM elements
// function createRow(name, type, weight) {

//     let table = document.getElementById("table")

//     let newRow = document.createElement('tr')

//     let tHead = document.createElement('th')
//         tHead.scope = "row"
//         tHead.innerText = `${name}`

//     let pokeType = document.createElement('td')
//         pokeType.innerText = `${type}`
    
//     let pokeWeight = document.createElement('td')
//         pokeWeight.innerText = `${weight}`

//     let imageData = document.createElement('td')
//         let img = document.createElement('img')
//         img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/222.png'
//         imageData.appendChild(img)

//     newRow.append(tHead, pokeType, pokeWeight, imageData)


//     table.appendChild(newRow)
// }

// createRow("Adam", "Psychic", 1222)


// // Deleting DOM Elements
// function deleteFirstRow() {
//     return document.getElementsByTagName('tr')[1].i
// }

// deleteFirstRow()