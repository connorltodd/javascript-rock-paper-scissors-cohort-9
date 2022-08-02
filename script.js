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
        // console.log('usersChoice', usersChoice)
        // console.log('computersChoice', computersChoice)
        checkWinner(computersChoice, usersChoice)
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
function checkWinner (computersChoice, usersChoice) {
    console.log('usersChoice', usersChoice)
    console.log('computersChoice', computersChoice)

    const computersChoiceObject = gameWinningOptions.find(
        function(option) {
            // console.log('option', option)
            if(option.name === computersChoice) {
                return option;
            }
        }
    )

    const usersChoiceObject = gameWinningOptions.find(
        function(option) {
            // console.log('option', option)
            if(option.name === usersChoice) {
                return option;
            }
        }
    )

    if(computersChoiceObject.beats === usersChoice) {
        console.log('computer wins');
        updateScores('computer')
        return;
    }

    if(usersChoiceObject.beats === computersChoice) {
        console.log('user wins');
        updateScores('user')
        return;
    }

    console.log('this round was a draw')
}

// 5. whoever the winner is increase the score (if there is a draw do not increment scores)
function updateScores (winner) {
    const computerScore = document.getElementById('computer-score');
    const userScore = document.getElementById('user-score');

    if (winner === 'user') {
        userScore.innerText = Number(userScore.innerText) + 1
    }
        
    if(winner === 'computer') {
        computerScore.innerText = Number(computerScore.innerText) + 1
    }
}


// 6. Reset the scores of each user back to zero
function resetScores () {
    const computerScore = document.getElementById('computer-score');
    const userScore = document.getElementById('user-score');
    userScore.innerText = 0
    computerScore.innerText = 0;
} 
