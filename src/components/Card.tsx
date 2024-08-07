interface Subject{
    img: string,
    title: string,
    description: string,
    component: JSX.Element,
}


function Card(props: Subject){
    return(
        <div className="card">
            <img src={props.img} className='card-img'></img>
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-description'>{props.description}</p>
        </div>
    );
}

export default Card