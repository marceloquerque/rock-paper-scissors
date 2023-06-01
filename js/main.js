let playerChoice = document.querySelectorAll(".option-box");

Array.from(playerChoice).forEach(element => {
    element.addEventListener("click", playGame)
})

function playGame(click) {
    if (click.target)
}