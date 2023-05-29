function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        return "rock"
    } else if (compChoice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}
getComputerChoice()

function userChoice() {
    let userChoice = prompt("Choose: rock, paper, or scissors")
    return userChoice.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a draw! ${playerSelection} equals ${computerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    let runs = 0;
    while (runs < 5) {
        console.log(playRound(userChoice(), getComputerChoice()))
        runs += 1;
    }
}

game()