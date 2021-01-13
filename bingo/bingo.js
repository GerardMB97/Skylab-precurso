let username;
let bingoCard;
let turnNumber;
let turnNumbers;
let line1;
let line2;
let line3;
let numberOfTurns;
let points;
let leaderboard = [];
let firstLine;

function Bingo() {
    askUsername();
    createCard();
    displayPunctuationRules();
    turnNumbers = [];
    numberOfTurns = 0;
    firstLine = false;
    let newTurn;

    do {
        playTurn();
        newTurn = keepPlaying();
    } while (bingoCard.some(a => a.matched === false) && newTurn)

    calculateScore();
    updateLeaderboard();
    displayLeaderboard();
    playNewGame();
}

function askUsername() {
    username = prompt('Enter your name');

    if (!isNaN(username) || username === '') {
        confirm('Please type a valid answer');
        askUsername();
    }
}

function createCard() {

    const numberGenerator = () => {
        return {
            number: Math.round(Math.random() * 30) + 1,
            matched: false
        }
    }

    bingoCard = [];
    console.clear();

    do {
        let cardNumber = numberGenerator();
        if (! bingoCard.some(a => a.number === cardNumber.number)) {
            bingoCard.push(cardNumber)
        }
    } while (bingoCard.length < 15)

    line1 = bingoCard.slice(0, 5);
    line2 = bingoCard.slice(5, 10);
    line3 = bingoCard.slice(10);

    displayBingoCard();

    let newCard = confirm("Do you like this card? If u press cancel you'll be given a new one");

    if (! newCard) 
        createCard();
    
}

function playTurn() {

    createRandomTurnNumber();
    updateBingoCard();
    checkForLine();
    numberOfTurns++;

}

function createRandomTurnNumber() {

    turnNumber = Math.round(Math.random() * 40) + 1;
    if (turnNumbers.some(a => a === turnNumber)) {
        createRandomTurnNumber();
    } else {
        turnNumbers.push(turnNumber);
    }

}

function updateBingoCard() {
    if (bingoCard.some(a => a.number === turnNumber)) {
        let matchedNumber = bingoCard.map(a => a.number).indexOf(turnNumber);
        bingoCard[matchedNumber].matched = true;
        bingoCard[matchedNumber].number = 'X';
        alert(`Number ${turnNumber}, you got a match.`);
        console.clear();
        displayBingoCard();
    } else {
        alert(`Number ${turnNumber}, no match.`);
    }
}

function checkForLine() {
    let line1Completed = line1.some(a => a.matched === false) ? false : true;
    let line2Completed = line2.some(a => a.matched === false) ? false : true;
    let line3Completed = line3.some(a => a.matched === false) ? false : true;

    if (! firstLine && (line1Completed || line2Completed || line3Completed)) {

        alert('Line! Keep going you almost got it');
        firstLine = true;
    }
}


function displayBingoCard() {
    let printableLine1 = line1.map(a => a.number).join(' ');
    let printableLine2 = line2.map(a => a.number).join(' ');
    let printableLine3 = line3.map(a => a.number).join(' ');

    console.log(printableLine1, "\n", printableLine2, "\n", printableLine3)
}

// He hecho que pregunte si seguir jugando cada 5 turnos para que no se haga muy pesado completar un carton entero.
function keepPlaying() {
    if (numberOfTurns % 5 === 0) {
        let newTurn = confirm('Do you want to keep playing?');

        return newTurn ? true : false;

    } else {
        return true;
    }
}

function displayPunctuationRules() {

    alert('The score follows a pretty simple logic. You stat with 130 points, and lose 2 points every new turn you play, so the maximum points you can get is 100 assuming you get a match every turn.')
}

function calculateScore() {

    if (bingoCard.some(a => a.matched === false)) {
        alert("You didn't finnish the card, comeback and finnish it next time to make it to the leaderboard");
    } else {
        points = 130 - numberOfTurns * 2;
        alert(`Good job, you got ${points} points.`)
    }
}

function updateLeaderboard() {
    const PLAYER = {
        username: username,
        score: points
    }

    leaderboard.push(PLAYER);
    leaderboard.sort((a, b) => (a.score > b.score) ? -1 : 1);
}

function displayLeaderboard() {
    console.log('LEADERBOARD')
    for (let player in leaderboard) {
        console.log(`${
            leaderboard[player].username
        } ==> ${
            leaderboard[player].score
        }`)
    }
}

function playNewGame() {
    if (confirm('Do you want to play again?')) {
        Bingo();
    } else {
        alert('See you soon!');
    }
}
