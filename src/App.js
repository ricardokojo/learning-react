import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

function App() {
  const [members, setMembers] = useState([]);

  const onAddMember = (member) => {
    setMembers([...members, member]);
  }

  const teams = [
    {
      name: 'Backend',
      primary: '#ffadad',
      secondary: 'coral'
    },
    {
      name: 'Frontend',
      primary: '#ffd6a5',
      secondary: 'orange'
    },
    {
      name: 'Ciência de Dados',
      primary: '#fdffb6',
      secondary: 'gold'
    },
    {
      name: 'DevOps',
      primary: '#caffbf',
      secondary: 'green'
    },
    {
      name: 'UX e Design',
      primary: '#9bf6ff',
      secondary: 'skyblue'
    },
    {
      name: 'Mobile',
      primary: '#a0c4ff',
      secondary: 'royalblue'
    },
    {
      name: 'Inovacão',
      primary: 'bdb2ff',
      secondary: 'purple'
    },
  ];

  return (
    <div className="App">
      <Banner />
      <Form onAddMember={onAddMember} />
      {
        teams.map(team => <Team key={team.name} team={team.name} primary={team.primary} secondary={team.secondary} />)
      }
    </div>
  );
}

export default App;
