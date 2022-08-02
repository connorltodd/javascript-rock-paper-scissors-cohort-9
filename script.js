// Pseudocode
// 1. Group each game winning option into an object
// options (array of objects)
// scissors beats paper
// paper beats rock
// rock beats scissors

const gameWinningOptions = [
    {
        name: 'scissors',
        beats: 'paper'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'rock',
        beats: 'scissors'
    }
];

// 2. a function to take the users choice (dom interaction) and store it inside a variable
const userOptions = document.getElementsByClassName('user-options');

for(let i = 0; i < userOptions.length; i++) {
    // key events to focus on submit, change, click
    // function inside event listener is a callback function
    userOptions[i].addEventListener('click', function(event) {
        // target is what element has been clicked
        const usersChoice = event.target.value;
        const computersChoice = computerChoiceGenerator()
        console.log('usersChoice', usersChoice)
        console.log('computersChoice', computersChoice)
    })
}


// 3. the computer will randomly select rock, paper or scissors 
// (array which holds all the options, variable to choose the random number
// array[randomNumber], store the computers choice in a variable, 
// store the code inside a function)
function computerChoiceGenerator () {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex]
}



// 4. function to check who is the winner
// 5. whoever the winner is increase the score 
// 6. Reset the scores of each user back to zero 
