import './Team.css';

function Team(props) {
    return (
        <section className='team'>
            <h3>{props.team}</h3>
        </section>
    )
}

export default Team;