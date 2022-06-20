// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    state.game = null;
    state.pastGames = [];
}

// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
export function startGame(prompt, aName, bName) {
    state.game = {
        prompt: prompt,
        teamA: { name: aName, score: 0 },
        teamB: { name: bName, score: 0 },
        
    };
    console.log(prompt);
}

export function upVote(option) {
    if (option === '+') {
        state.game.aName.score++;
    }
    if (option === '-') {
        state.game.bName.score++;
    }
}

export function downVote(option) {
    if (option === '+') {
        state.game.aName.score--;
    }
    if (option === '-') {
        state.game.bName.score--;
    }
}

export function endGame() {
    state.pastGames.push(state.game);
    state.game = null;
}