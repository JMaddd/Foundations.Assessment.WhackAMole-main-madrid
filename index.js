/*
Used the querySelectorAll method to return a node list of all elements with the 
class 'mole'. I then created a function set change the default display property of 'none' 
to 'block' for a random element, causing it to be displayed on the page
*/

//Functions used for this activity

let arrOfMoles = document.body.querySelectorAll('.mole');

function randomMole () {
    let randomMole = Math.floor((8 * Math.random()) + 1);
    arrOfMoles[randomMole].style.display = 'block'
}

/*
Start button will initiate the game, and will change the display value 
of a random mole elment to display: block, causing it to appear.
*/

let startBtn = document.querySelector('#start');

startBtn.addEventListener('click', () => {
    randomMole();
})


let score = document.querySelector('#scoreCounter')
let counter = 0;

/*
When the end user clicks on the mole, it will cause the functions I created below
to reset all display values of moles to none, and then choose a new 
random mole to appear. 

I used a for loop to create event listeners for each element with the class 'mole' and 
incorporated the hitMole randomMole functions to reset the display values of all the moles
and select a new randomMole;
*/

/*
Score counter keeps track of how many moles have been hit
*/

for (let mole = 0; mole < arrOfMoles.length; mole++) {
    arrOfMoles[mole].addEventListener('click', () => {
        hitMole();
        randomMole();
    })
}

function hitMole () {
    counter += 1;
    score.innerHTML = `Score Counter: ${counter}`;
    //Reset display values to none, then choose a new mole
    for (let mole = 0; mole < arrOfMoles.length; mole++) {
        arrOfMoles[mole].style.display = 'none'
    }
}

/*
Reset button will reset the score counter, and the display values for all the moles
*/

let resetBtn = document.querySelector('#reset')

resetBtn.addEventListener('click', () => {

})


