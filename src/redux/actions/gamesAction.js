import axios from "axios"
import { popularGamesUrl,upcomingGamesUrl,newGamesUrl } from '../../api'


//Action Creator
const loadGames = () => async (dispatch) => {
    //Fetch Axios
    const popularData = await axios.get(popularGamesUrl)
    const upcomingData = await axios.get(upcomingGamesUrl)
    const newGamesData = await axios.get(newGamesUrl)
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
}

export default loadGames