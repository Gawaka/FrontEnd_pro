import './excuseCard.scss';

function ExcuseCard({ text, onDelete, likes, onLike, onDislike, completed, onToggle }) {
    return(
        <div className={`card ${completed ? 'completed' : ''}`}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                    type="checkbox"
                    checked={completed || false}
                    onChange={onToggle}
                    style={{ cursor: 'pointer' }}
                />
                
                <span 
                    className="card-text" 
                    style={{ textDecoration: completed ? 'line-through' : 'none' }}
                >
                    {text}
                </span>
            </div>

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