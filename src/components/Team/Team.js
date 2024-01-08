import Card from '../Card/Card';
import './Team.css';

function Team(props) {
    return (
        props.members.length > 0 && <section className='team' style={{ backgroundColor: props.primary }}>
            <h3 style={{ borderBottomColor: props.secondary }}>{props.name}</h3>
            <ul>
            {props.members
                .map(member =>
                <li>
                    <Card
                        color={props.secondary}
                        name={member.name}
                        imageUrl={member.imageUrl}
                        position={member.position}
                    />
                </li>)}
            </ul>
        </section>
    )
}

export default Team;