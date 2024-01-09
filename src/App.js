import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

function App() {
  const [members, setMembers] = useState([]);

  const [teams, setTeams] = useState([
    {
      name: 'Backend',
      primary: '#ffadad',
      secondary: '#ff7f50',
      slug: 'backend',
    },
    {
      name: 'Frontend',
      primary: '#ffd6a5',
      secondary: '#ffa500',
      slug: 'frontend',
    },
    {
      name: 'Ciência de Dados',
      primary: '#fdffb6',
      secondary: '#ffd700',
      slug: 'ciencia-de-dados',
    },
    {
      name: 'DevOps',
      primary: '#caffbf',
      secondary: '#008000',
      slug: 'devops',
    },
    {
      name: 'UX e Design',
      primary: '#9bf6ff',
      secondary: '#87ceeb',
      slug: 'ux-e-design',
    },
    {
      name: 'Mobile',
      primary: '#a0c4ff',
      secondary: '#4169e1',
      slug: 'mobile',
    },
    {
      name: 'Inovacão',
      primary: '#bdb2ff',
      secondary: '#800080',
      slug: 'inovacao',
    },
  ]);

  const onAddMember = (member) => {
    setMembers([...members, member]);
  }

  const onDeleteMember = (id) => {
    setMembers([...members.filter(m => m.id !== id)]);
  }

  const onChangeTeamSecondary = (slug, color) => {
    setTeams(teams.map(team => {
      if (team.slug === slug) {
        team.secondary = color;
      }

      return team;
    }));
  }

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
          onChangeTeamSecondary={onChangeTeamSecondary}
          onDeleteMember={onDeleteMember}
          members={members.filter(member => member.team === team.slug)}
        />)
      }
    </div>
  );
}

export default App;
