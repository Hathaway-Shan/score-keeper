// import utilities

// import component creators
import createScoreboard from './components/Scoreboard.js';
import createNewPoll from './components/NewPoll.js';
import createScoreKeeper from './components/ScoreKeeper.js';
import createHideInputs from './components/HideInputs.js';
// import state and dispatch functions
//pollExport goes in curly braces below
import state, { endGame, downVote, upVote, startGame } from './state.js';
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const HideInputs = createHideInputs(document.querySelector('#form-container'), {
    handleNewPoll: (aName, bName) => {
        HideInputs(aName, bName);
        display();
    }
});

const NewPoll = createNewPoll(document.querySelector('#poll-controls'));


//Handler functions
const Scoreboard = createScoreboard(document.querySelector('#scoreboard'));
const ScoreKeeper = createScoreKeeper(document.querySelector('#scoreboard-container'), {
    handleUpVote: (option) => {
        upVote(option);
        display();
    }
    handleDownVote: (option) => {
        upVote(option);
        display();
    }
}); 
// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs 
    HideInputs({ game: state.game });
    Scoreboard({ game: state.game });
    ScoreKeeper({ game: state.game });
    NewPoll({ game: state.game });
};

// Call display on page load
display();
