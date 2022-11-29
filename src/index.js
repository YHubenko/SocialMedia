import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./data/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderDom = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
    )
}
store.subscribe(renderDom);
renderDom(store.getState());


// root.render(
//     <BrowserRouter>
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </BrowserRouter>
// );