const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const computerScoreDisplay = document.getElementById("computer-score");
const yourSocreDisplay = document.getElementById("your-score");

let yourChoice;
let computerChoice;
let result;

let yourSocre = 0;
let computerScore = 0;

const signs = ['<img src="img/rockimg.png" alt="rock">',
    '<img src="img/paperimg.png" alt="paper">',
    '<img src="img/scissorsimg.png" alt="scissors"></img>'
]
let chosenSign;
let computerChosenSign;


possibleChoices.forEach(button => button.addEventListener("click", (e) => {
    yourChoice = e.target.id;
    if (yourChoice == "rock") {
        chosenSign = signs[0];
    } else if (yourChoice == "paper") {
        chosenSign = signs[1];
    } else if (yourChoice == "scissors") {
        chosenSign = signs[2];
    }

    yourChoiceDisplay.innerHTML = chosenSign;
    generateComputerChoice();
    displayResult()
}))


function generateComputerChoice() {
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            computerChosenSign = signs[0];
            break;
        case 2:
            computerChoice = "scissors";
            computerChosenSign = signs[2];
            break;
        case 3: 
            computerChoice = "paper";
            computerChosenSign = signs[1];
            break;
            
    }

    computerChoiceDisplay.innerHTML = computerChosenSign;
}

function displayResult() {
    if (computerChoice === yourChoice) {
        result = "Draw";
    } else if (computerChoice === "rock" && yourChoice === "paper" ||
        computerChoice ==="scissors" && yourChoice === "rock" ||
        computerChoice === "paper" && yourChoice === "scissors") {
        
        result = "You win!";
        yourSocre++;  
    } else {
        result = "You lost!";
        computerScore++;
    }

    resultDisplay.innerHTML = result;
    computerScoreDisplay.innerHTML = computerScore;
    yourSocreDisplay.innerHTML = yourSocre;
}