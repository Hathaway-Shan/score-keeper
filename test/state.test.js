import state, {
    initialize, pollExport,
    // import dispatch functions
    pollExport,
} from '../state.js';
// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('new poll creates poll', (expect) => {
    // what is the initial expected state?
    expect.equal(state.game, null);
    // use the action

    // what should the state be now?


    // remove this line when starting your test
    expect.deepEqual(state, {});
});
