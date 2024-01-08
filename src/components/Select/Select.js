import { slugify } from '../../slugify';
import './Select.css';

function Select(props) {
    let slug = slugify(props.name);

    return (
        <fieldset className='custom-fieldset'>
            <label>{props.name}</label>
            <select name={slug} required={props.required} >
                <option value="">Selecione um time</option>
                {
                    props.options.map(option => <option key={option.name} value={option.slug}>{option.name}</option>)
                }
            </select>
        </fieldset>
    )
}

export default Select;