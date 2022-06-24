import state, {
    endGame,
    initialize,
    startPoll,
} from '../state.js';
// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('start poll creates poll', (expect) => {
    //what is the initial state?
    state.game = {
        prompt: '',
        teamA: { name: '', score: 0 },
        teamB: { name: '', score: 0 },
    };
    // use the action
    startPoll('wizards', 'for', 'against');
    // what should the state be now?
    expect.deepEqual(state.game, {
        prompt: 'wizards',
        teamA: { name: 'for', score: 0 },
        teamB: { name: 'against', score: 0 },
    });
});

test('endGame ends game and pushes to array', (expect) => {
    //what is the initial state
    state.pastGames = [];
    startPoll('wizards', 'for', 'against');
    //use the action
    endGame();
    //what should the state be now?
    expect.deepEqual(state.pastGames, [{
        prompt: 'wizards',
        teamA: { name: 'for', score: 0 },
        teamB: { name: 'against', score: 0 },
    }]);
    expect.deepEqual(state.game, null);
});