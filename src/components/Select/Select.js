import './Select.css';

function Select(props) {
    return (
        <fieldset className='custom-fieldset'>
            <label>{props.name}</label>
            <select>
                {
                    props.options.map(option => <option key={option} value={option}>{option}</option>)
                }
            </select>
        </fieldset>
    )
}

export default Select;