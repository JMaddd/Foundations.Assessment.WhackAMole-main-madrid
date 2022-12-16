/*
Used the querySelectorAll method to return a node list of all elements with the 
class 'pochita'. I then created the randomPochita function to change the default display property of 'none' 
to 'block' for a random element, causing it to be displayed on the page
*/

function randomPochita () {
    let arrOfPochitas = document.querySelectorAll('.pochita');

    let randompochita = Math.floor(((arrOfPochitas.length-1) * Math.random()) + 1);
    arrOfPochitas[randompochita].style.display = 'block'
}

/*
Score counter keeps track of how many pochitas have been hit
*/

let score = document.querySelector('#scoreCounter')
let counter = 0;

/*
Start button will initiate the game, and will change the display value 
of a random element with the class pochita to display: block, causing it to appear.
*/

let startBtn = document.querySelector('#start');

startBtn.addEventListener('click', () => {
    let arrOfPochitas = document.querySelectorAll('.pochita');
    //Calls 
    randomPochita();
    function hitPochita() {
        let arrOfPochitas = document.querySelectorAll('.pochita');

        counter += 1;
        score.innerHTML = `Score Counter: ${counter}`;
        //A loop is used to reset display values to none, then choose a new pochita
        for (let pochita = 0; pochita < arrOfPochitas.length; pochita++) {
            arrOfPochitas[pochita].style.display = 'none'
        }
    }
    /*
    A loop is used here to set an event listener for each image, so that if it's clicked, the hitPochita function
    runs, and the score counter gets incremented by one. 
    */
    for (let pochita = 0; pochita < arrOfPochitas.length; pochita++) {
        let arrOfPochitas = document.querySelectorAll('.pochita');

        arrOfPochitas[pochita].addEventListener('click', () => {
            hitPochita();
            randomPochita();
        })
    }
})

/*
When the end user clicks on the pochita, it will cause the functions I created below
to reset all display values of pochitas to none, and then choose a new 
random pochita to appear. 

I used a for loop to create event listeners for each element with the class 'pochita' and 
incorporated the hitpochita randompochita functions to reset the display values of all the pochitas
and select a new randompochita;
*/

/*
Reset button will reset the score counter, and the display values for all the pochitas. This 
button will also reset playing field to the default 3x3 grid if you are playing in psycho mode.
*/

let resetBtn = document.querySelector('#reset')

resetBtn.addEventListener('click', () => {
    let arrOfHoles = document.querySelectorAll('.holes');
    let arrOfPochitas = document.querySelectorAll('.pochita');

    //Resets the counter to 0 and changes the number displayed on the webpage to 0
    counter = 0;
    score.innerHTML = `Score Counter: ${counter}`;
    //Resets the display values of all the pochita images
    for (let pochita = 0; pochita < arrOfPochitas.length; pochita++) {
        arrOfPochitas[pochita].style.display = 'none'
    }
    //If playing in psycho mode, the reset button removes all the holes and pochitas
    for (let hole = 0; hole < arrOfHoles.length; hole++) {
        playingField.removeChild(arrOfHoles[hole]);
    }
    //This loop resets the grid to the default when you launch the game (3x3 or 9 total holes/pochitas)
    for (let holeNum = 1; holeNum <= 9; holeNum++) {
        let hole = document.createElement('div');
        hole.classList.add('holes');
        let holeImg = document.createElement('img');
        holeImg.classList.add('hole');
        holeImg.setAttribute('src', 'images/hole.png');
        let pochitaImg = document.createElement('img');
        pochitaImg.setAttribute('src', 'images/pochita.png');
        pochitaImg.classList.add('pochita');

        playingField.appendChild(hole)
        hole.appendChild(holeImg);
        hole.appendChild(pochitaImg);
    }
    playingField.style.height = 600 + "px";
    playingField.style.width = 600 + "px";
})

/*
Extra Stuff: I added in the option to randomize the number of holes and pochitas. 
The logic for this part was pretty straight forward. I just had to figure out how to get rid of webpage's 
default number of holes/pochitas (which was 9), and replace them with a random number of holes/pochitas 
between 1 and 100. 

The hardest part was getting it this to play nicely with the default layout of the game. The final product 
could definitely be opitmized, but overall, I'm pretty happy with the result.
*/

function psycho () {
    let arrOfHoles = document.querySelectorAll('.holes');
    let numOfHoles = Math.floor((100 * Math.random()) + 1);
    let playingField = document.querySelector('#playingField');
    
    counter = 0;
    score.innerHTML = `Score Counter: ${counter}`;
    //This conditional resized the container holding all the holes and pochitas, so that it looks nicer 
    if (numOfHoles > 9) {
            playingField.style.height = 100 + "%"; 
            playingField.style.width = 100 + "%";
        }   
    //The loops below follow the same logic as the loops used in the reset button. 
    for (let hole = 0; hole < arrOfHoles.length; hole++) {
        playingField.removeChild(arrOfHoles[hole]);
    }
    for (let holeNum = 1; holeNum <= numOfHoles; holeNum++) {
        let hole = document.createElement('div');
        hole.classList.add('holes');
        let holeImg = document.createElement('img');
        holeImg.classList.add('hole');
        holeImg.setAttribute('src', 'images/hole.png');
        let pochitaImg = document.createElement('img');
        pochitaImg.setAttribute('src', 'images/pochita.png');
        pochitaImg.classList.add('pochita');

        playingField.appendChild(hole)
        hole.appendChild(holeImg);
        hole.appendChild(pochitaImg);
    }
}

let psychoMode = document.querySelector('#psycho');

psychoMode.addEventListener('click', () => {
    // let numOfHoles = Number(prompt("Choose how many holes you want!"))
    psycho()
})