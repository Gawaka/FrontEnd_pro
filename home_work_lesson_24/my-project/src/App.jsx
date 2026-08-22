import './App.scss';

export default function SwapiApp() {

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

        <div className="results-list">
          
          <div className="data-card">
            <h2>Luke Skywalker</h2>
            <p>Birth: 19BBY | Gender: male | Height: 172cm</p>
          </div>

          <div className="data-card">
            <h2>Darth Vader</h2>
            <p>Birth: 41.9BBY | Gender: male | Height: 202cm</p>
          </div>

          <div className="data-card">
            <h2>Leia Organa</h2>
            <p>Birth: 19BBY | Gender: female | Height: 150cm</p>
          </div>

        </div>

        <button className="load-more">Load More...</button>
      </div>
    </>
  );
}