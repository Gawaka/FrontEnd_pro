
function CharCard({name, birth, height, gender, skinColor}) {

    return (
        <div className="results-list">
            <div className="data-card">
                <h2>{name}</h2>
                <p>{birth}</p>
                <p>{gender}</p>
                <p>{height}</p>
                <p>{skinColor}</p>
            </div>

        </div>
    )
};

export default CharCard;