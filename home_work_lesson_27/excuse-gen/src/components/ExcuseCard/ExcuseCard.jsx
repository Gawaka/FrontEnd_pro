import './excuseCard.scss';

function ExcuseCard({text, onDelete}) {
    return(
        <div className="card">
            <span className="card-text">{text}</span>
            <button 
                className="btn-icon" 
                onClick={onDelete}
                title='Видалити'
            >
                ✕
            </button>
        </div>
    );
};

export default ExcuseCard;