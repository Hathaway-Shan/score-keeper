export default function createScoreKeeper(root) { 
    //reference DOM

    //event listeners

    //should return it's component render function
    // return ({data}) => {
    return (props) => {
        const game = props.game;
        if (!game) {
            root.classList.add('hidden');
            
        } else {
            root.classList.remove('hidden');
        }

        root.innerHTML = '';

        const div = document.createElement('div');
        div.classList.add('poll-box');

        const span1 = document.createElement('span');
        span1.classList.value = 'team-a';
        span1.textContent = game.teamA.name;

    };
}