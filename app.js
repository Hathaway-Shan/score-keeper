// the state machine build pattern
//import needed functions from state
import state from './state.js';
import { startPoll, endGame } from './state.js';

const pollPen = document.querySelector('#past-polls');

//wire up event handlers this will need to be done for
//interactive elements of functions filling out these elements
//switches to poll exists and we have an active poll

//begin

//set state for no poll state
//points to a section id > points to the form inside the form element
const newPollForm = document.querySelector('#form-container > form');
const pollControlsAPlus = document.querySelector('#increaseScoreA');
const pollControlsAMinus = document.querySelector('#removeScoreA');
const pollControlsBPlus = document.querySelector('#increaseScoreB');
const pollControlsBMinus = document.querySelector('#removeScoreB');
const teamA = document.querySelector('#team-a');
const scoreA = document.querySelector('#score-a');
const teamB = document.querySelector('#team-b');
const scoreB = document.querySelector('#score-b');
const endButton = document.querySelector('#end-poll');

//container elements for hidden targeting based on game state
const formContainer = document.querySelector('#form-container');
const scoreBoard = document.querySelector('#scoreboard-container');

//create poll function

//set state for poll existing state

//create vote and downvote function
//increment voted item

//create end poll function
//save poll and switch to no poll state


//write two display functions one for the no poll state and the poll state
function displayNewPoll() {
    formContainer.classList.remove('hidden');
    scoreBoard.classList.add('hidden');
}
connectEventListeners();
displayNewPoll();

function displayVoting() {
    formContainer.classList.add('hidden');
    scoreBoard.classList.remove('hidden');
    displayScores();
}

function connectEventListeners() {

    newPollForm.addEventListener('submit', (event) => {
        //takes html element with form and returns a simplified structure of
        //just the data we're interested in
        const formData = new FormData(newPollForm);
        startPoll(formData.get('topicEntry'), formData.get('pollA'), formData.get('pollB'));
        event.preventDefault();
        displayVoting();
    });

    pollControlsAPlus.addEventListener('click', (event) => {
        state.game.teamA.score++;
        event.preventDefault();
        displayScores();
    });
    pollControlsAMinus.addEventListener('click', (event) => {
        state.game.teamA.score--;
        event.preventDefault();
        displayScores();
    });
    pollControlsBPlus.addEventListener('click', (event) => {
        state.game.teamB.score++;
        event.preventDefault();
        displayScores();
    });
    pollControlsBMinus.addEventListener('click', (event) => {
        state.game.teamB.score--;
        event.preventDefault();
        displayScores();
    });
    endButton.addEventListener('click', (event) => {
        event.preventDefault();
        endGame();
        displayPastScores();

    });
}

function displayScores() {
    scoreA.textContent = state.game.teamA.score;
    scoreB.textContent = state.game.teamB.score;
    teamA.textContent = state.game.teamA.name;
    teamB.textContent = state.game.teamB.name;
}

function displayPastScores() {
    //fixes endgame button appending multiple times and breaking
    pollPen.innerHTML = '';
    for (let pastGame of state.pastGames) {
        const pollBox = document.createElement('div');
        pollBox.classList.add('past-poll-display');
        let promptSpan = document.createElement('span');
        let nameASpan = document.createElement('span');
        let scoreASpan = document.createElement('span');
        let nameBSpan = document.createElement('span');
        let scoreBSpan = document.createElement('span');

        promptSpan.textContent = pastGame.prompt;
        nameASpan.textContent = pastGame.teamA.name;
        scoreASpan.textContent = pastGame.teamA.score;
        nameBSpan.textContent = pastGame.teamB.name;
        scoreBSpan.textContent = pastGame.teamB.score;
        console.log(pastGame);

        pollBox.append(promptSpan, nameASpan, scoreASpan, nameBSpan, scoreBSpan);
        pollPen.append(pollBox);
    }
}

// export default function createScoreKeeper(root) { 

//     return (props) => {
//         const game = props.game;

//         if (!game) {
//             root.classList.add('hidden');
            
//         } else {
//             root.classList.remove('hidden');
//         }

//         root.innerHTML = '';
