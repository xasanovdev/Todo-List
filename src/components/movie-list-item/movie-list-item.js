import './movie-list-item.css'
/*Class MoveList component
class MovieListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {favourite: false,like: false}
  }

  Oddiy statelar
  OnFavourite = () => {
    this.setState(prevState => ({
      favourite: prevState.favourite ? false : true,
    }))
  }
  OnLike = () => {
    this.setState(prevState => ({
      like: prevState.like ? false : true
    }))
  }


  render() {
    const {name, viewers, onDelete ,onProp, favourite, like} = this.props
    return (
      <li  className = {`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
          <span onClick={onProp} className='list-group-item-label' data-toggle='like' >{name}</span>
          <input type="number" className='list-group-item-input' defaultValue={viewers} />
          <div className="d-flex justify-content-center align-items-center">
            <button onClick={onProp} className="btn-cookie btn-sm"><i className="fas fa-cookie" data-toggle='favourite'></i></button>
            <button className="btn-trash btn-sm"><i className="fas fa-trash" onClick={onDelete}></i></button>
            <i className='fas fa-star'></i>
          </div>
      </li>
    )
  }
} */

/* Function MovieListitem */
const MovieListItem = (props) => {

  const {name, viewers, onDelete ,onProp, favourite, like} = props

  return (
    <li  className = {`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
      <span onClick={onProp} className='list-group-item-label' data-toggle='like' >{name}</span>
      <input type="number" className='list-group-item-input' defaultValue={viewers} />
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-cookie btn-sm"><i onClick={onProp} className="fas fa-cookie" data-toggle='favourite'></i></button>
        <button className="btn-trash btn-sm"><i className="fas fa-trash" onClick={onDelete}></i></button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  )
}

export default MovieListItem