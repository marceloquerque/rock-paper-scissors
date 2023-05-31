let scoreInfo = document.querySelector(".score-info");
let scoreMessage = document.querySelector(".score-message");
let playerChoice = document.querySelector(".player-choice");
let playerScore = document.querySelector(".player-score");
let compChoice = document.querySelector(".comp-choice");
let compScore = document.querySelector(".comp-score");

const options = document.querySelectorAll(".option-box");
Array.from(options).forEach((element) => {
    element.addEventListener('click', userChoice)
})

function userChoice(click) {
    getComputerChoice()
    playRound(playerChoice.innerHTML, compChoice.innerHTML)
    if (click.target.classList.contains('rock')) {
        playerChoice.innerHTML = "✊"
    } else if (click.target.classList.contains('paper')) {
        playerChoice.innerHTML = "✋"
    } else if (click.target.classList.contains('scissors')) {
        playerChoice.innerHTML = "✌"
    }
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
        compChoice.innerHTML = "✊"
    } else if (randomChoice === 2) {
        compChoice.innerHTML = "✋"
    } else {
        compChoice.innerHTML = "✌"
    }
}

// function game() {
    // let runs = 0;
// let userScore = 0;
// let compScore = 0;


// function userChoice() {
//     let userChoice = prompt("Choose: rock, paper, or scissors")
//     return userChoice.toLowerCase()
// }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        scoreInfo.innerHTML = "It's a draw!"
        scoreMessage.innerHTML =  `${playerSelection} equals ${computerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        userScore += 1
        scoreInfo.innerHTML = "You win!"
        scoreMessage.innerHTML = `${playerSelection} beats ${computerSelection}`
    } else {
        compScore += 1
        scoreInfo.innerHTML = "You lose!"
        scoreMessage.innerHTML = `${computerSelection} beats ${playerSelection}`
    }
}

// while (runs < 5) {
//     playRound(userChoice(), getComputerChoice());
//     runs += 1;
// }

if (userScore > compScore) {
    console.log(`You won! User score: ${userScore} | Comp. Score: ${compScore}`)
} else if (compScore > userScore) {
    console.log(`You lost! User score: ${userScore} | Comp. Score: ${compScore}`)
} else {
    console.log(`It's a draw! User score: ${userScore} | Comp. Score: ${compScore}`)
}
// }

// game()