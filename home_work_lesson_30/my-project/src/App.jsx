import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharCard from './components/CharCard/CharCard';
import { getCharacters, resetCharacters } from './store/charactersSlice';
import './App.scss';

export default function SwapiApp() {
  const characters = useSelector((state)=> state.characters.characters);
  const isLoading = useSelector((state)=> state.characters.isLoading);
  const error = useSelector((state)=> state.characters.error);

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCharacters())
  },[]);
  
  const handleReset = ()=> {
    dispatch(resetCharacters());
  };

  return (
    <>
      <div className="app-container">
        <header>
          <h1>SWAPI <span>Terminal</span></h1>
        </header>

        <nav className="menu">
          <a href="#people" className="active">People</a>
          <a href="#planets">Planets</a>
          <a href="#films">Films</a>
          <a href="#starships">Starships</a>
        </nav>

        <div className="search-box">
          <input type="text" placeholder="Search data..." />
          <button>Search</button>
        </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Server ERROR!</p>}
            {!isLoading && !error && characters.map((char, i)=> (
              <CharCard
                key={i}
                name={char.name}
                birth={char.birth_year}
                gender={char.gender}
                height={char.height}
                skinColor={char.skin_color}
              />
          ))}
        <button className="load-more" onClick={handleReset}>Clear</button>
      </div>
    </>
  );
}