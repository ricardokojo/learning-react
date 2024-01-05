import './Button.css';

function Button(props) {
    return (
        <button className='custom-button' type='submit'>{props.children}</button>
    );
}

export default Button;
