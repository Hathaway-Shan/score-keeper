import state, {
    initialize,
    startPoll,
    // pollExport,
    // uncomment above and below import dispatch functions
    // pollExport,
} from '../state.js';
// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('start poll creates poll', (expect) => {
    // use the action
    startPoll('wizards', 'for', 'against');
    // what should the state be now?
    expect.deepEqual(state.game, {
        prompt: 'wizards',
        teamA: { name: 'for', score: 0 },
        teamB: { name: 'against', score: 0 },
    });
});

test('score buttons increment score state', (expect) => {

})
