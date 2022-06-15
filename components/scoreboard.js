export default function createScoreboard(root) { 
    //reference DOM
    const [teamADisplay, teamBDisplay] = root.querySelectorAll('span');
    //event listeners

    //should return it's component render function
    // return ({data}) => {
    return (props) => {
        const game = props.game;
        if (!game) {
            root.classList.add('hidden');
            
        } else {
            root.classList.remove('hidden');

            teamADisplay.textContent = game.teamA.name;
            teamBDisplay.textContent = game.teamB.name;
            teamADisplay.textContent = game.teamA.score;
            teamBDisplay.textContent = game.teamB.score;
        }
    };
}
