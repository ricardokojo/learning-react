import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import Select from "../Select/Select";
import './Form.css';

function Form(props) {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        props.onAddMember(Object.fromEntries(formData.entries()));
    }

    return (
        <form className="custom-form" onSubmit={onSubmit}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <InputText name="Nome" placeholder="Digite seu nome" required={true} />
            <InputText name="Cargo" placeholder="Digite seu cargo" required={true} />
            <InputText name="Imagem" placeholder="Digite o endereco da imagem" />
            <Select name="Time" options={props.teams} required={true} />
            <Button>Criar card</Button>
        </form>
    )
}

export default Form;