// the state machine build pattern

//wire up event handlers this will need to be done for
//interactive elements of functions filling out these elements
//switches to poll exists and we have an active poll

//begin

//set state for no poll state
//points to a section id > points to the form inside the form element
const newPollForm = document.querySelector('#form-container > form');
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
        console.log(formData.get('topicEntry'), formData.get('pollA'), formData.get('pollB'));
        event.preventDefault();
    });
}
displayNewPoll();

function displayVoting() {
    console.log('display voting');
}

