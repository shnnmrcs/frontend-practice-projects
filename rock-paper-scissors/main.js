const options = ['Rock', 'Paper', 'Scissors'];
const playerChoices = document.querySelectorAll('#choices button');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
let pScore = 0;
let cScore = 0;

const shoot = () => {
    playerChoices.forEach( option => {
        option.addEventListener("click", function() {
            let player = this.getAttribute('data-choice');
            let computer = options[Math.floor(Math.random() * 3)];
            playerChoice.textContent = "Player";
            computerChoice.textContent = "Computer";
            playerChoice.classList.toggle('shake');
            computerChoice.classList.toggle('shake');
            setTimeout(() => {
                playerChoice.textContent = player;
                computerChoice.textContent = computer;
                playerChoice.classList.toggle('shake');
                computerChoice.classList.toggle('shake');
                compare(player, computer);
            }, 1000);
        });
    });
}

const compare = (player, computer) => {
    if(player == 'Rock' && computer == 'Rock' || player == 'Paper' && computer == 'Paper' || player == 'Scissors' && computer == 'Scissors'){
        //console.log('Draw');
    }else if (player == 'Rock' && computer == 'Paper' || player == 'Paper' && computer == 'Scissors' || player == 'Scissors' && computer == 'Rock'){
        //console.log('Computer Wins');
        cScore++;
        computerScore.textContent = cScore;
    }else if (player == 'Rock' && computer == 'Scissors' || player == 'Paper' && computer == 'Rock' || player == 'Scissors' && computer == 'Paper'){
        //console.log('Player Wins');
        pScore++;
        playerScore.textContent = pScore;
    }
}

const app = () => {
    shoot();
}

app();
