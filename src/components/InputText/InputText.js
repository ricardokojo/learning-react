import './InputText.css';

function InputText(props) {

  return (
    <fieldset className='custom-fieldset'>
        <label htmlFor={props.slug}>{props.name}</label>
        <input type='text' name={props.slug} placeholder={props.placeholder} required={props.required} />
    </fieldset>
  );
}

export default InputText;
