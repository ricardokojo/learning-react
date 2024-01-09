import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

function App() {
  const [members, setMembers] = useState([]);

  const onAddMember = (member) => {
    setMembers([...members, member]);
  }

  const onDeleteMember = (id) => {
    setMembers([...members.filter(m => m.id !== id)]);
  }

  const teams = [
    {
      name: 'Backend',
      primary: '#ffadad',
      secondary: 'coral',
      slug: 'backend',
    },
    {
      name: 'Frontend',
      primary: '#ffd6a5',
      secondary: 'orange',
      slug: 'frontend',
    },
    {
      name: 'Ciência de Dados',
      primary: '#fdffb6',
      secondary: 'gold',
      slug: 'ciencia-de-dados',
    },
    {
      name: 'DevOps',
      primary: '#caffbf',
      secondary: 'green',
      slug: 'devops',
    },
    {
      name: 'UX e Design',
      primary: '#9bf6ff',
      secondary: 'skyblue',
      slug: 'ux-e-design',
    },
    {
      name: 'Mobile',
      primary: '#a0c4ff',
      secondary: 'royalblue',
      slug: 'mobile',
    },
    {
      name: 'Inovacão',
      primary: '#bdb2ff',
      secondary: 'purple',
      slug: 'inovacao',
    },
  ];

  return (
    <div className="App">
      <Banner />
      <Form onAddMember={onAddMember} teams={teams.map(team => {
        return {
          name: team.name,
          slug: team.slug
        };
      })}/>
      {
        teams.map(team => <Team
          key={team.slug}
          slug={team.slug}
          name={team.name}
          primary={team.primary}
          secondary={team.secondary}
          onDeleteMember={onDeleteMember}
          members={members.filter(member => member.team === team.slug)}
        />)
      }
    </div>
  );
}

export default App;
