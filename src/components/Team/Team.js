import Card from '../Card/Card';
import './Team.css';

function Team(props) {
    return (
        <section className='team' style={{ backgroundColor: props.primary }}>
            <h3 style={{ borderBottomColor: props.secondary }}>{props.team}</h3>
            <Card></Card>
        </section>
    )
}

export default Team;