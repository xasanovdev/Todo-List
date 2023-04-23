import './app.css'

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Counter from '../counter/counter'



class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                { name:'Empire of Osman',viewers : 666, favourite:false, like:true, id:1 },
                { name:'Ertugrul',viewers : 777, favourite:true, like:false, id:2 },
                { name:'Omar',viewers : 888, favourite:false, like:true, id:3 },
            ],
            term:'',
            filter:'all',
        }
    }
    
    onDelete = id => {
        this.setState(({data}) => {
            const newArr = data.filter((c) => c.id !== id)
            return{
                data:newArr,
            }
        })
    }
    addForm = (item) => {
        const newItem = {name: item.name, viewers: item.viewers ,id :uuidv4(), favourite:false, like:false}
        this.setState(({data}) => ({
            data:[...data,newItem ]
        }))
    }

    onProp = (id,prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchHandler = (arr, term) => {
        if(term.length === 0) {
            return arr
        }

        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }

    filterHandler = (arr,filter) => {
        switch(filter) {
            case 'popular'     :  return arr.filter(c => c.like)
            case 'favourite'   :  return arr.filter(c => c.favourite)
            default            :  return arr;
        }
    }

    updateTermHandler = term => this.setState({ term })

    updateFilterHandler = filter => this.setState({ filter })

    render() {
        const { data, term, filter } = this.state;
        const AllMovies = data.length
        const AllFavouriteMovies = data.filter(item => item.favourite === true).length
        const AllLikeMovies = data.filter(item => item.like === true).length
        const visibleData = this.filterHandler(this.searchHandler(data,term),filter)
        return (
            <div className="app font-monospace">
                 <div className="content">
                    <AppInfo AllMovies = {AllMovies} AllFavouriteMovies ={AllFavouriteMovies} AllLikeMovies ={AllLikeMovies}/>
                    <div className='search-panel'>
                        <SearchPanel updateTermHandler = {this.updateTermHandler}/>
                        <AppFilter filter={filter}  updateFilterHandler={this.updateFilterHandler} />
                    </div>
                    <MovieList data = {visibleData} onDelete={this.onDelete} onProp={this.onProp}  />
                    <MoviesAddForm addForm = {this.addForm}/>
                </div> 
                <Counter/>
            </div>
        )
    }
} 

/* Class App Component
const App = () => {
    const data = [
        {name:'Empire of Osman',viewers : 666, favourite:false, id:1 },
        {name:'Ertugrul',viewers : 777, favourite:true, id:2 },
        {name:'Omar',viewers : 888, favourite:false, id:3 },
    ]

    const onDelete = id => {
        console.log(id);
    }
    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo />
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <MovieList data = {data} onDelete={onDelete}/>
                <MoviesAddForm/>
            </div>
            <User/>
        </div>
    )
}*/

export default App