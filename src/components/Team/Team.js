import Card from '../Card/Card';
import './Team.css';

function Team(props) {
    return (
        <section className='team' style={{ backgroundColor: props.primary }}>
            <h3 style={{ borderBottomColor: props.secondary }}>{props.name}</h3>
            {props.members
                .filter(member => member.team === props.slug)
                .map(member => <Card
                    color={props.secondary}
                    name={member.name}
                    imageUrl={member.imageUrl}
                    position={member.position}
                />)}
        </section>
    )
}

export default Team;