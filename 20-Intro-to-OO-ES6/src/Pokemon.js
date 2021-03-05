// // //**********Object Literal ****************/
// let coolPerson = {
//     firstName: "Scott",
//     lastName: "Gloyna",
//     greet: () => {
//        console.log("hi")
//     }
// }

// // //********** Factory Pattern ****************************/
// // function coolPersonFactory(firstName, lastName) {
// //     return {
// //         firstName: firstName,
// //         lastName: lastName,
// //         greet: () => {
// //             console.log("hi")
// //         }
// //     }
// // }

// // let jade = coolPersonFactory("Jade", "CoolPerson")
// // let zed = coolPersonFactory("Zed", "CoolPerson")
// // //********** ES5 Constructor ****************************/
// function CoolPerson(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName

//     // this.greet = () =>  `Hi my name is ${this.firstName}`
    
// }

// CoolPerson.prototype.greet = function(){
//     console.log(`Hi my name is ${this.firstName} ${this.lastName}`)
// }



// let boonie = new CoolPerson("Boonie", "Coolperson")
// let matt = new CoolPerson("Matt", "Coolperson")


// // //********** ES6 Class Inheritance ****************************/

// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }

//     greet(){
//         return `Hi my name is ${this.getFullName()}`
//     }
// }

// class Teacher extends Person {
//     constructor(firstName, lastName, specialty){

//         super(firstName, lastName)

//         this.specialty = specialty
//     }

//     teach(){
//         console.log(`${this.greet()}, I'm teaching ${this.specialty}`)
//     }
// }

// const BASE_URL = 'http://localhost:3000/pokemon/'

// class Pokemon {
//     constructor(id, name, sprite){
//         this.id = id
//         this.name = name
//         this.sprite = sprite
//     }
//     // renderCard() {
        
//     // }

//     // greet(){
//     //     return `Hi my name is ${this.getFullName()}`
//     // }
// }

// async function getPokemon() {
//     const resp = await fetch(BASE_URL)
//     const pokeData = await resp.json()

//     pokeData.forEach(pokemon => {
//         //Object Destructuring 
//         let { id, name, sprite } = pokemon

//         // let id = pokemon.id
//         // let name = pokemon.name
//         let newPoke = new Pokemon(id, name, sprite)
        
//     })

// }

// getPokemon()

//Key-Value Syntax ShortHand **************************************
// const pizzaMaker = (cheese, sauce) => {

  

//     let newPizza = {cheese,sauce} 

//     console.log(newPizza)
// }

// pizzaMaker("Mozzerll", "Tommatt")

// Spread Operator ****************************************
let array = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = [...array, ...array2]

let personObject = {
    firstName: "Adam",
    lastName: "Wayne",
    email: 'mail@mail.com',
    userName: 'adamwjo',
    phoneNum: '555-555-5555',
    address: `123 B Bakers St.`,
    favorite_actors: ['Alicia Vikander', 'Michael Fassbender', 'Jude Law']
}


function addNumToArray(num, array) {
    return [num, ...array]
}


function updateName(personObject, firstName, lastName) {
    // let newObj = {...personObject, firstName: firstName, lastName: lastName}
    let newObj = {...personObject, firstName, lastName}
    console.log(newObj)
}