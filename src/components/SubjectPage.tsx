import { useState } from "react";
import Cardview from "./Cardview";

export interface Data{
    title: string,
    subjects: {name: string, desc: string, img: string, component: JSX.Element}[]
}

function SubjectPage(props: Data){

    const [selected, setSelected] = useState<JSX.Element>(<Cardview subjects={props.subjects}/>);

    return(
        <div>
            <h2>{props.title}</h2>
            <div className="subject-display">
                <nav className="subject-nav">
                    <ul>
                        {props.subjects.map(x => <li key={x.name} onClick={() => setSelected(x.component)}>{x.name}</li>)}
                    </ul>
                </nav>
                <div>
                    {selected}
                </div>
            </div>
        </div>
    );
}

export default SubjectPage