import Card from '../Card/Card';
import './Team.css';

function Team(props) {
    return (
        props.members.length > 0 && <section className='team' style={{ backgroundColor: props.primary }}>
            <h3 style={{ borderBottomColor: props.secondary }}>{props.name}</h3>
            <input
                type='color'
                className='color-picker'
                onChange={(e) => {
                    props.onChangeTeamSecondary(props.slug, e.target.value);
                }}
                value={props.secondary} />
            <ul>
            {props.members
                .map(member =>
                <li key={member.id}>
                    <Card
                        color={props.secondary}
                        imageUrl={member.imageUrl}
                        id={member.id}
                        name={member.name}
                        onDeleteMember={props.onDeleteMember}
                        position={member.position}
                    />
                </li>)}
            </ul>
        </section>
    )
}

export default Team;