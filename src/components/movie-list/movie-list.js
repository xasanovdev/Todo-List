import MovieListItem from '../movie-list-item/movie-list-item'
import './movie-list.css'

const MovieList = ({ data, onDelete, onProp }) => {
  return (
    <ul className="movie-list">
      {data.map(item => (
      <MovieListItem 
        key={item.id} 
        name={item.name}
        viewers={item.viewers}
        favourite={item.favourite} 
        like={item.like}
        onDelete={() => onDelete(item.id)} 
        onProp={(e) => onProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
      />
      ))}
    </ul>
  )
}

export default MovieList