import './Card.css';

function Card() {
    return (
        <div className='card'>
            <header>
                <img src='https://github.com/ricardokojo.png'/>
            </header>
            <div class='content'>
                <h4>Ricardo Kojo</h4>
                <h5>Desenvolvedor Frontend</h5>
            </div>
        </div>
    );
}

export default Card;