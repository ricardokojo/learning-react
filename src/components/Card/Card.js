import './Card.css';
import { MdDelete } from 'react-icons/md';

function Card(props) {
    return (
        <div className='card'>
            <header style={{ background: `linear-gradient(to top, transparent 50%, ${props.color} 50% 100%`}}>
                <MdDelete className='delete' size={24} onClick={() => {
                    props.onDeleteMember(props.id)
                }} />
                <img src={props.imageUrl} />
            </header>
            <div className='content'>
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    );
}

export default Card;