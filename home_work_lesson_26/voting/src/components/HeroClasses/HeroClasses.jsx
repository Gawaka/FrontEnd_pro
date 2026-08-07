
export function HeroClasses({onClick, src, name, votes, className}) {

    return(
        <div className={className} onClick={onClick}>
            <img src={src} alt={name} />
            <p>votes: {votes}</p>
        </div>
    )
}