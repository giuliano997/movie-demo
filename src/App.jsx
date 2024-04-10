import { MovieCard } from "./components/MovieCard";
import './App.css'

function App() {

  return (
    <>
      <h1>Movie List</h1>
      <ul className="movie-list">
        <MovieCard title="Godfather"/>
        <MovieCard title="Titanic"/>
        <MovieCard title="taxi Driver"/>
        <li> 
          <h2>Godfather</h2>
        </li>
        <li>
           <h2>Titanic</h2>
        </li>
        <li> 
          <h2>Taxi Driver</h2>
        </li>
      </ul>
        
    </>
  )
}

export default App
