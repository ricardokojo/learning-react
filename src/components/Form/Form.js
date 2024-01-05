import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import Select from "../Select/Select";
import './Form.css';

function Form() {
    const teams = [
        'Backend',
        'Frontend',
        'Ciência de Dados',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovacão'
    ];

    return (
        <form className="custom-form">
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <InputText name="Nome" placeholder="Digite seu nome" required={true} />
            <InputText name="Cargo" placeholder="Digite seu cargo" required={true} />
            <InputText name="Imagem" placeholder="Digite o endereco da imagem" />
            <Select name="Time" options={teams} required={true} />
            <Button>Criar card</Button>
        </form>
    )
}

export default Form;