// the state machine build pattern
//import needed functions from state
import state from './state.js';
import { startPoll } from './state.js';



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
//create poll function

//set state for poll existing state

//create vote and downvote function
//increment voted item

//create end poll function
//save poll and switch to no poll state


//write two display functions one for the no poll state and the poll state
function displayNewPoll() {
    newPollForm.addEventListener('submit', (event) => {
        //takes html element with form and returns a simplified structure of
        //just the data we're interested in
        const formData = new FormData(newPollForm);
        startPoll(formData.get('topicEntry'), formData.get('pollA'), formData.get('pollB'));
        event.preventDefault();
        displayVoting();
    });
}
displayNewPoll();

function displayVoting() {
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

}

function displayScores() {
    scoreA.textContent = state.game.teamA.score;
    scoreB.textContent = state.game.teamB.score;
    teamA.textContent = state.game.teamA.name;
    teamB.textContent = state.game.teamB.name;
}

