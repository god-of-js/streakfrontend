export default {
    getSeason: state => {
        return state.serie.seasons.filter(x => x._id === state.seasonId)
    }
}