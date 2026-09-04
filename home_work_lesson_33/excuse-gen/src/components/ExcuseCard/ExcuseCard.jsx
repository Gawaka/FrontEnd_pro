import './excuseCard.scss';

function ExcuseCard({text, onDelete, likes, onLike, onDislike}) {
    return(
        <div className="card">
            <span className="card-text">{text}</span>
            <div className="card-wrapper">
                <span className='likes'>{likes}</span>
                <button
                    className='like-dislike'
                    onClick={onLike}
                >
                    👍
                </button>
                <button 
                    className='like-dislike'
                    onClick={onDislike}
                >
                    👎
                </button>
            </div>
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