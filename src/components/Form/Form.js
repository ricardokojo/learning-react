import InputText from "../InputText/InputText";
import './Form.css';

function Form() {
    return (
        <form className="custom-form">
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <InputText name="Nome" placeholder="Digite seu nome" />
            <InputText name="Cargo" placeholder="Digite seu cargo" />
            <InputText name="Imagem" placeholder="Digite o endereco da imagem" />
        </form>
    )
}

export default Form;