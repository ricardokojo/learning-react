import { slugify } from '../../slugify';
import './InputText.css';

function InputText(props) {
  let slug = slugify(props.name);

  return (
    <fieldset className='custom-fieldset'>
        <label htmlFor={slug}>{props.name}</label>
        <input type='text' name={slug} placeholder={props.placeholder} />
    </fieldset>
  );
}

export default InputText;
