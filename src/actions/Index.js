export const getEvents = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch('http://localhost:3001/events')
        .then(resp => resp.json())
        .then(events => dispatch({ type: "SET_EVENTS", events }))
    }
}

export const addEvent = (event, history) => {
    return dispatch => {
            fetch('http://localhost:3001/events', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ event })
            })
            .then(resp => resp.json())
            .then(event => {
                dispatch({ type: "ADD_EVENT", event })
                history.push("/events")
            })
    }
}
