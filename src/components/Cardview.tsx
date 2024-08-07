import Card from "./Card";

interface Data{
    subjects: {name: string, desc: string, img: string, component: JSX.Element}[],
}

function Cardview(props: Data){
    return(
        <div>
            {props.subjects.map(x => <Card key={x.name} img={x.img} title={x.name} description={x.desc} component={x.component}/>)}
        </div>
    );
}

export default Cardview