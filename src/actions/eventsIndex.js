export const getEvents = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("http://localhost:3001/events")
        .then(resp => resp.json())
        .then(events => dispatch({ type: "SET_EVENTS", events }))
    }
}