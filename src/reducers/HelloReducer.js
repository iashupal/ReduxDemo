import {PRESSED_HELLO_BUTTON} from '../actions/HelloAction';

const INITIAL_STATE = {
    helloText: 'Hello',
    pressedButton: false
};
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PRESSED_HELLO_BUTTON:
            return {
                pressedButton: true, helloText: "You pressed the button, wow !"
            };
        default: 
            return state;
    }
}