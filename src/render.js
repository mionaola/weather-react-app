import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { clearInput, updateInputText } from './redux/state';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (state) => {
    root.render(
        <App
            state={state}
            updateInputText={updateInputText}
            clearInput={clearInput}
        />
    );
    reportWebVitals();
}