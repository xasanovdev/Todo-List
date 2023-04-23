import { Component } from 'react'
import './movies-add-form.css'

class MoviesAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      views:'',
    }
  }

  ChangeHandlerInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  addFormhandler = (e) => {
    e.preventDefault();
    this.props.addForm({name:this.state.name, viewers:this.state.views})
    this.setState({
      name:'',
      views:'',
    })
  }

  render() {
    const { name, views } = this.state

    return (
      <div className='movies-add-form'>
          <h1>Yangi kino qo'shish</h1>
          <form className="add-form d-flex gap-2" onSubmit={this.addFormhandler}>
            <input  type="text" className='form-control new-post-label' placeholder='Kino nomini kiriting.' onChange={this.ChangeHandlerInput} name='name' value={name}/>
            <input type="number" className='form-control new-post-label' placeholder='Nechi marotaba ko`rilganini kiriting.' onChange={this.ChangeHandlerInput} name='views' value={views}/>
            <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
          </form>
      </div>
    )
  }
}

/* MoviesAddForm function component
const MoviesAddForm = () => {
  return (
    <div className='movies-add-form'>
        <h1>Yangi kino qo'shish</h1>
        <form className="add-form d-flex gap-2">
        <input type="text" className='form-control new-post-label' placeholder='Kino nomini kiriting.' />
        <input type="number" className='form-control new-post-label' placeholder='Nechi marotaba ko`rilganini kiriting.' />
        <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
        </form>
    </div>
  )
}*/

export default MoviesAddForm