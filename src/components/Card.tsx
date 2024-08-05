import pic from '../assets/default.png'

interface Subject{
    img: string,
    title: string,
    description: string
}


function Card(props: Subject){
    return(
        <div className="card">
            <img src={pic} alt="subject picture" className='card-img'></img>
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-description'>{props.description}</p>
        </div>
    );
}

export default Card