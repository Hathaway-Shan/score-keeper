// import utilities

// import component creators
import createScoreboard from './components/scoreboard';
// import state and dispatch functions
import state from './state';
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const Scoreboard = createScoreboard(document.querySelector('#scoreboard-container'))
// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    const scoreboardProps = { game: state.game };
    Scoreboard(scoreboardProps);
}

// Call display on page load
display();
