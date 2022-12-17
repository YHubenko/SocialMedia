import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDom = () => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
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