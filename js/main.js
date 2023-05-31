const scoreInfo = document.querySelector(".score-info").innerHTML;
var scoreMessage = document.querySelector(".score-message");
const playerChoice = document.querySelector(".player-choice").innerHTML;
const playerScore = document.querySelector(".player-score").innerHTML;
const compChoice = document.querySelector(".comp-choice").innerHTML;
const compScore = document.querySelector(".comp-score").innerHTML;

const options = document.querySelectorAll(".option-box");
Array.from(options).forEach((element) => {
    element.addEventListener('click', userChoice)
})

function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        document.querySelector(".comp-choice").innerHTML = "✊"
    } else if (compChoice === 2) {
        document.querySelector(".comp-choice").innerHTML = "✋"
    } else {
        document.querySelector(".comp-choice").innerHTML = "✌"
    }
}

function userChoice(click) {
    getComputerChoice()
    if (click.target.classList.contains('rock')) {
        document.querySelector(".player-choice").innerHTML = "✊"
    } else if (click.target.classList.contains('paper')) {
        document.querySelector(".player-choice").innerHTML = "✋"
    } else if (click.target.classList.contains('scissors')) {
        document.querySelector(".player-choice").innerHTML = "✌"
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
        scoreMessage = `It's a draw! ${playerSelection} equals ${computerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        userScore += 1
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        compScore += 1
        return `You lose! ${computerSelection} beats ${playerSelection}`
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