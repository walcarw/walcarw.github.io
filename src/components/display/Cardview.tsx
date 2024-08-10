import Card from "./Card";

interface Data{
    subjects: {name: string, img: string, component: JSX.Element}[],
    setter: React.Dispatch<React.SetStateAction<JSX.Element>>
}

function Cardview(props: Data){
    return(
        <div className="cardview">
            {props.subjects.map(x => <Card key={x.name} img={x.img} title={x.name} component={x.component} setter={props.setter}/>)}
        </div>
    );
}

export default Cardview