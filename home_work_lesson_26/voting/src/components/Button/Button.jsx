import './button.scss'

function Button({className, text, onClick}) {

    return(
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
};