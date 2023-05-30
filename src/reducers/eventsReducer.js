const initialState = {
    events: [],
    loading: true
}

const eventsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_EVENTS":
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