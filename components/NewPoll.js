export default function createNewPoll(root) { 
    //reference DOM
    const form = root.querySelector('form');
    
    //event listeners

    //should return it's component render function
    // return ({data}) => {
    return (props) => {
        const game = props.game;
        if (game) {
            root.classList.remove('hidden');
            
        } else {
            root.classList.add('hidden');
        }
    };
}