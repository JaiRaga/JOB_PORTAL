import { GET_CANDIDATE, GET_CANDIDATES, POST_CANDIDATE, POST_SHORTLIST, POST_REJECT, GET_SHORTLISTED, GET_REJECTED } from "../actions/types"

const initialState = {
    candidates: [],
    shortlisted: [],
    rejected: [],
    candidate: null,
    shortlist: null,
    reject: null,
    loading: true
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_CANDIDATES:
            return {
                ...state,
                candidates: [...payload],
                loading: false
            }

        case GET_CANDIDATE:
            return {
                ...state,
                candidate: payload,
                loading: false
            }

        case GET_SHORTLISTED:
            return {
                ...state,
                shortlisted: [...payload],
                loading: false
            }

        case GET_REJECTED:
            return {
                ...state,
                rejected: [...payload],
                loading: false
            }

        case POST_SHORTLIST:
            return {
                ...state,
                shortlisted: [...payload, ...state.shortlisted],
                rejected: state.rejected.filter(reject => reject._id !== payload._id),
                loading: false
            }

        case POST_REJECT:
            return {
                ...state,
                shortlisted: state.shortlisted.filter(shortlist => shortlist._id !== payload._id),
                rejected: [...payload, ...state.rejected],
                loading: false
            }

        default:
            return state
    }

}