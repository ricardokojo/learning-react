import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';

function App() {
  const [members, setMembers] = useState([]);

  const onAddMember = (member) => {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onAddMember={onAddMember} />
    </div>
  );
}

export default App;
