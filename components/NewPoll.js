export default function createNewPoll(root) { 
    //reference DOM
    const form = root.querySelector('form');
    form.addEventLister('submit'), (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        createNewPoll(formData.get('prompt'), formData.get('team-a'), formData.get('team-b'));
    }; 
    
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