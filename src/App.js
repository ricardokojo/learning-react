import Banner from './components/Banner/Banner';
import InputText from './components/InputText/InputText';

function App() {
  return (
    <div className="App">
      <Banner />
      <InputText name="Nome" placeholder="Digite seu nome" />
      <InputText name="Cargo" placeholder="Digite seu cargo" />
      <InputText name="Imagem" placeholder="Digite o endereco da imagem" />
    </div>
  );
}

export default App;
