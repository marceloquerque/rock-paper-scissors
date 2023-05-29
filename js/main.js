function game() {
    let runs = 0;
    let userScore = 0;
    let compScore = 0;

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

    function userChoice() {
        let userChoice = prompt("Choose: rock, paper, or scissors")
        return userChoice.toLowerCase()
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return `It's a draw! ${playerSelection} equals ${computerSelection}`
        } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
            userScore += 1
            return `You win! ${playerSelection} beats ${computerSelection}`
        } else {
            compScore += 1
            return `You lose! ${computerSelection} beats ${playerSelection}`
        }
    }

    while (runs < 5) {
        playRound(userChoice(), getComputerChoice());
        runs += 1;
    }
    
    if (userScore > compScore) {
        console.log(`You won! User score: ${userScore} | Comp. Score: ${compScore}`)
    } else if (compScore > userScore) {
        console.log(`You lost! User score: ${userScore} | Comp. Score: ${compScore}`)
    } else {
        console.log(`It's a draw! User score: ${userScore} | Comp. Score: ${compScore}`)
    }
}

game()