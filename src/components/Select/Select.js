import { slugify } from '../../slugify';
import './Select.css';

function Select(props) {
    let slug = slugify(props.name);

    return (
        <fieldset className='custom-fieldset'>
            <label>{props.name}</label>
            <select name={slug} required={props.required} >
                {
                    props.options.map(option => <option key={option} value={option}>{option}</option>)
                }
            </select>
        </fieldset>
    )
}

export default Select;