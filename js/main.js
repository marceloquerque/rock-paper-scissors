const game = () => {
    let scoreInfo = document.querySelector(".score-info");
    let scoreMessage = document.querySelector(".score-message");
    let showPlayerChoice = document.querySelector(".player-choice");
    let showCompChoice = document.querySelector(".comp-choice");
    let showPlayerScore = document.querySelector(".player-score")
    let showCompScore = document.querySelector(".comp-score")
    let popupBox = document.querySelector("#popup");
    let popupMessage = document.querySelector(".popup-winner");
    let buttons = document.querySelectorAll(".btn");

    const options = document.querySelectorAll(".option-box");
    Array.from(options).forEach(element => {
        element.addEventListener("click", playGame)
    })

    let playerScore = 0;
    let compScore = 0;

    function playGame(click) {
        let playerChoice = click.target.id;
    
        function getComputerChoice() {
            const choices = ["rock", "paper", "scissors"];
            return choices[Math.floor(Math.random() * choices.length)];
        }
        
        let computerChoice = getComputerChoice()

        const selected = {
            rock: "✊",
            paper: "✋",
            scissors: "✌",
        }

        function showSelected(player, computer) {
            showPlayerChoice.innerHTML = selected[player];
            showCompChoice.innerHTML = selected[computer];
            
        }

        function playRound(player, computer) {
            showSelected(playerChoice, computerChoice)
            if (player === computer) {
                scoreInfo.innerHTML = "It's a draw!"
                scoreMessage.innerHTML = `Both chose ${player}`
            } else if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
                playerScore += 1;
                scoreInfo.innerHTML = "You win!"
                scoreMessage.innerHTML = `${player} beats ${computer}`
                showPlayerScore.innerHTML = playerScore;
            } else {
                compScore += 1;
                scoreInfo.innerHTML = "You lose!";
                scoreMessage.innerHTML = `${computer} beats ${player}`
                showCompScore.innerHTML = compScore;
            }
        }
    
        playRound(playerChoice, computerChoice)

        function showWinner() {
            popupBox.style.visibility = "visible"
            if (compScore > playerScore) {
                popupMessage.innerHTML = "You lost!"
            }
            Array.from(buttons).forEach(button => {
                button.addEventListener("click", () => {
                    window.location.reload()
                    console.log("test")
                })
            })
        }

        if (playerScore === 5 || compScore === 5) {
            Array.from(options).forEach(element => {
                element.removeEventListener("click", playGame)
            })
            showWinner();
        }
    }

}

game()