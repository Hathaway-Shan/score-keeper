export default function createNewPoll(root) { 
    //reference DOM

    //event listeners

    //should return it's component render function
    // return ({data}) => {
    return (props) => {
        const game = props.data;
        if (game) {
            root.classList.add('hidden');
            return;
        }

        root.classList.remove('hidden');

    };
}