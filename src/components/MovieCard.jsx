import "./Moviecard.css";
export function MovieCard (title) {
    console.log(title);
    return(
        <li className="movie-card" >
        <h2>{title}</h2>
      </li>
    
    )
}