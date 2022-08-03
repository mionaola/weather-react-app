import { rerenderTree } from "../render";

let state = {
    inputText: '',
}

export let updateInputText = (newText) => {
    state.inputText = newText;
    rerenderTree(state);
}

export let clearInput = () => {
    state.inputText = '';
}

window.state = state;

export default state;