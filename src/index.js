import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./data/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDom = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
    )
}
rerenderDom(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderDom(state)
});


// root.render(
//     <BrowserRouter>
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </BrowserRouter>
// );