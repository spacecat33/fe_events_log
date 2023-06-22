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

export const deleteAttendee = (attendee) => {
    console.log("deleting attendee")
    return dispatch => {
            fetch(`http://localhost:3001/attendees/${attendee.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
               
            })
            .then(data => {
                dispatch({ type: "DELETE_ATTENDEE", payload: attendee })
                // history.push("/events")
            })
    }
}

const eventsReducer = (state=initialState, action) => {
    let idx;
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
        
        case "DELETE_ATTENDEE":
            console.log("deleting attendees")

            // return state.filter(attendee => attendee.id !== attendee.event_id);
            // return { ...state, attendees: [...state.events.attendees.filter(attendee => attendee.id !== action.id)]}
            const event = state.events.find(event => action.payload.event_id === event.id) 
            const updatedAttendees = event.attendees.filter(attendee => attendee.id !== action.payload.id)
            const updatedEvent = {
                ...event, attendees: updatedAttendees 
            }
            // idx = state.findIndex(attendee => attendee.id === attendee.id);
            // return [...state.slice(0, idx), ...state.slice (idx +1)];
            // 
            let updatedEvents = state.events.map(ev => {
                if (updatedEvent.id === ev.id) {
                    return updatedEvent
                } else {
                    return ev
                }
            })
            return {...state, events: updatedEvents}

        default:
            console.log()
            return state;
 
        }
}

export default eventsReducer;