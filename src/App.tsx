import { useState } from "react";
import Network from "./components/network/Network";
import Hardware from "./components/hardware/Hardware";
import Languages from "./components/languages/Languages";
import Linux from "./components/linux/Linux";
import Software from "./components/software/Software";
import Winserv from "./components/winserv/Winserv";




function App(){

    const [subject, setSubject] = useState<JSX.Element>();

    return(
        <div className="main-container">
            <h1 id="main-title">IT Cheatsheets</h1>
            <nav>
                <button className="nav-button" onClick={() => setSubject(<Hardware/>)}>Hardware</button>
                <button className="nav-button" onClick={() => setSubject(<Languages/>)}>Languages</button>
                <button className="nav-button" onClick={() => setSubject(<Linux/>)}>Linux</button>
                <button className="nav-button" onClick={() => setSubject(<Network/>)}>Network</button>
                <button className="nav-button" onClick={() => setSubject(<Software/>)}>Software</button>
                <button className="nav-button" onClick={() => setSubject(<Winserv/>)}>Windows Server</button>
            </nav>
            <hr/>
            {subject}
        </div>
    );
}

export default App