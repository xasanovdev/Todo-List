import './app-info.css'

const AppInfo = ({ AllMovies,AllFavouriteMovies,AllLikeMovies }) => {
    return <div className="app-info">
        <p className='fs-2 text-uppercase'>Barcha kinolar soni : {AllMovies}</p>
        <p className='fs-3 text-uppercase'>Sevimli Filmlar soni : {AllFavouriteMovies} </p>
        <p className='fs-4 text-uppercase'>Like bosgan Filmlaringiz soni : {AllLikeMovies} </p>
    </div>
}

export default AppInfo