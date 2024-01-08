import './Card.css';

function Card(props) {
    return (
        <div className='card'>
            <header style={{ background: `linear-gradient(to top, transparent 50%, ${props.color} 50% 100%`}}>
                <img src={props.imageUrl} />
            </header>
            <div class='content'>
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    );
}

export default Card;