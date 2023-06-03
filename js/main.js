const game = () => {
    let runs = 5;
    
    while (runs !== 0) {

        function getComputerChoice() {
            const options = ["rock", "paper", "scissors"];
            return options[Math.floor(Math.random() * options.length)];
        }
        
        let computerChoice = getComputerChoice()
        let playerChoice = prompt("Choose: rock, paper or scissors")

        function playRound(player, computer) {
            player = player.toLowerCase();
            if (player === computer) {
                return `It's a draw! Both chose ${player}`
            } else if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
                return `You win! ${player} beats ${computer}`
            } else {
                return `You lose! ${computer} beats ${player}`
            }
        }
        
        console.log(playRound(playerChoice, computerChoice))

        runs -= 1;
    }

}

game()