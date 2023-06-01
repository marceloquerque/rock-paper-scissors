let playerChoice = document.querySelectorAll(".option-box");

Array.from(playerChoice).forEach(element => {
    element.addEventListener("click", playGame)
})

function playGame() {
    console.log(document.querySelector(".option-box").id);
}