export default function createScoreboard(root) { 
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
    };
}
