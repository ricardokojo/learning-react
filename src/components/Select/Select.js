import './Select.css';

function Select(props) {
    return (
        <fieldset className='custom-fieldset'>
            <label>{props.name}</label>
            <select required={props.required} >
                {
                    props.options.map(option => <option key={option} value={option}>{option}</option>)
                }
            </select>
        </fieldset>
    )
}

export default Select;