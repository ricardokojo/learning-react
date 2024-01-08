import './Select.css';

function Select(props) {
    return (
        <fieldset className='custom-fieldset'>
            <label>{props.name}</label>
            <select name={props.slug} required={props.required} >
                <option value="">Selecione um time</option>
                {
                    props.options.map(option => <option key={option.name} value={option.slug}>{option.name}</option>)
                }
            </select>
        </fieldset>
    )
}

export default Select;