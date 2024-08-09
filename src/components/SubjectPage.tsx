import { useEffect, useState } from "react";
import Cardview from "./display/Cardview";
import { Empty } from "./Empty";

export interface Data{
    title: string,
    subjects: {name: string, desc: string, img: string, component: JSX.Element}[]
}

function SubjectPage(props: Data){

    const [selected, setSelected] = useState<JSX.Element>(<Empty/>);

    useEffect(() => {setSelected(<Cardview subjects={props.subjects} setter={setSelected}/>)}, [])

    return(
        <div>
            <h2>{props.title}</h2>
            <div className="subject-display">
                <nav className="subject-nav">
                    <ul>
                        {props.subjects.map(x => <li className="list-click" key={x.name} onClick={() => setSelected(x.component)}>{x.name}</li>)}
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