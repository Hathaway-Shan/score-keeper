// import utilities

// import component creators
import createScoreboard from './components/Scoreboard';
import createNewPoll from './components/NewPoll';
import createScoreKeeper from './components/ScoreKeeper';
// import state and dispatch functions
import state from './state';
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const Scoreboard = createScoreboard(document.querySelector('#scoreboard'));
const NewPoll = createNewPoll(document.querySelector('#poll-controls'));
const ScoreKeeper = createScoreKeeper(document.querySelector('#scoreboard-container'));
// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    // commented out line 17 because marty got rid of it and I don't know why
    // const scoreboardProps = { game: state.game }; 
    Scoreboard({ game: state.game });
    ScoreKeeper({ game: state.game });
    NewPoll({ game: state.game });
}

// Call display on page load
display();
