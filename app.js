let computerSelection;
let playerSelection;
let playerWins = 0;
let computerWins = 0;
let winner;

const container = document.querySelector("#container");
container.textContent = "Welcome! First to 5 wins!";
const currentScore = document.createElement("currentScore");
const playAgain = document.querySelector("#playAgainBtn");
const buttons = document.querySelectorAll(".RPS");
playAgain.style.visibility = 'hidden';

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice;
    switch (randomNum) {
    case 0:
        return "Rock"
    case 1:
        return "Paper"
    case 2:
        return "Scissors"
    }
}

function playRound (playerSelection, computerSelection){
    if ((computerSelection == "Rock") && (playerSelection == "Scissors")){
        winner = "Computer";
    }
    else if ((computerSelection == "Rock") && (playerSelection == "Paper")){
        winner = "Player";
    }
    else if ((computerSelection == "Paper") && (playerSelection == "Scissors")){
        winner = "Player";
    }
    else if ((computerSelection == "Paper") && (playerSelection == "Rock")){
        winner = "Computer";
    }
    else if ((computerSelection == "Scissors") && (playerSelection == "Paper")){
        winner = "Computer";
    }
    else if ((computerSelection == "Scissors") && (playerSelection == "Rock")){
        winner = "Player";
    }
    else winner = "Tie";
    showResult(winner);
}

function showResult(winner){
    if (winner == "Player"){
        playerWins += 1;
        container.textContent = `You win! ${playerSelection} beats ${computerSelection} `;
    } else if (winner == "Computer"){
        computerWins += 1;
        container.textContent = `You lose! ${computerSelection} beats ${playerSelection} `;
    } else if (winner == "Tie"){
        container.textContent = "It's a tie!";
    } 
    currentScore.textContent = `| \nPlayer score: ${playerWins} Computer score: ${computerWins}`;
    container.appendChild(currentScore);
}

function restartGame(){
    playAgain.addEventListener('click', () =>{
        window.location.reload();
    });
}

function playGame(){
    buttons.forEach((button) => {
        button.addEventListener ('click', () => {
            computerSelection = getComputerChoice();
            playerSelection = button.textContent;
            playRound(playerSelection, computerSelection);
            if (playerWins == 5 || computerWins == 5){
                buttons.forEach((button) => {
                button.setAttribute('disabled', '');
                button.classList.add('disabled-button', 'opacity');
                });
                playAgain.style.visibility = 'visible';
                restartGame();
                if (playerWins < computerWins){
                    container.textContent = "You win the match!";
                    currentScore.textContent;
                    container.appendChild(currentScore);
                } else if (computerWins < playerWins){
                    container.textContent = "You lose the match!";
                    currentScore.textContent;
                    container.appendChild(currentScore);
                }
            }
        });
    });
}

playGame();