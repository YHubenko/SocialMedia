import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <div>
                <Header/>
                <Main/>
            </div>
        </div>
    );
}

export default App;
