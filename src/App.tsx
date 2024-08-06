import { useState } from "react";
import Network from "./components/Network";




function App(){

    const [subject, setSubject] = useState<JSX.Element>();

    return(
        <div className="main-container">
            <h1>IT Cheatsheets</h1>
            <nav>
                <button className="nav-button">Hardware</button>
                <button className="nav-button">Languages</button>
                <button className="nav-button">Linux</button>
                <button className="nav-button" onClick={() => setSubject(<Network/>)}>Network</button>
                <button className="nav-button">Software</button>
                <button className="nav-button">Windows Server</button>
            </nav>
            {subject}
        </div>
    );
}

export default App