import './app-filter.scss'

const AppFilter = ({ updateFilterHandler, filter }) => {
    return (
        <div className="btn-group">

            {btnsArr.map(item => (
                <button 
                key={item.name} 
                className={`btn ${filter === item.name ? 'btn-dark' : 'btn-outline-dark'}`}
                type="button" 
                onClick={()=>updateFilterHandler(item.name)}>{item.label}</button>
            ))}

        </div>
    )
}

const btnsArr = [
    {name:'all',label:'Barcha kinolar'},
    {name:'popular',label:'Like bosgan kinolar'},
    {name:'favourite',label:'Sevimli kinolar '},
]

export default AppFilter