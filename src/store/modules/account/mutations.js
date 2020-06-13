export default {
    setUser: (state, user) => {
        state.user = user
    },
    setJwt: (state, token) => {
        state.token = { headers: { Authorization: `Bearer ${token}` } }
        
    },
}