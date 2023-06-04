const initialState = {
    events: [],
    loading: true
}

export const getEvents = () => {
    console.log("getting events in actions")
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch('http://localhost:3001/events')
        .then(resp => resp.json())
        .then(events => dispatch({ type: "SET_EVENTS", events }))
    }
}

export const addEvent = (event, history) => {
    console.log("adding event")
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

// export const deleteEvent = (event, history) => {
//     console.log("deleting event")
//     return dispatch => {
//             fetch('http://localhost:3001/events', {
//                 method: "DESTROY",
//                 headers: {
//                     "Accept": "application/json",
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ event })
//             })
//             .then(resp => resp.json())
//             .then(event => {
//                 dispatch({ type: "DELETE_EVENT", event })
//                 history.push("/events")
//             })
//     }
// }

const eventsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            console.log("searching for/loading events")
            return {
                ...state,
                loading: true
            }
        case "SET_EVENTS":
            console.log("setting events")
            return {
                ...state,
                loading: false,
                events: action.events
            }
        default:
            return state;
 
        }
}

export default eventsReducer;