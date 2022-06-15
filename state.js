// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    // For example:
    state.game = {

        teamA: { name: 'team-a', score: 0 },
        teamB: { name: 'team-b', score: 0 },

    };
    // state.pastGames = [];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state

export function pollExport(teamA, teamB) {
    state.game = {
        teamA: {name: aName, score: 0 }
        teamB: {name: bName, score: 0 }
    }
}