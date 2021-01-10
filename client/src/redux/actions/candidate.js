import axios from "axios"
import { GET_CANDIDATE, GET_CANDIDATES, POST_CANDIDATE, POST_SHORTLIST, POST_REJECT, GET_SHORTLISTED, GET_REJECTED, CANDIDATE_ERROR } from "./types"

export const getAllCandidates = () => async dispatch => {
    try {
        console.log(1)
        const candidates = await axios.get('/api/candidates')
        console.log('4*****', candidates)
        dispatch({ type: GET_CANDIDATES, payload: candidates.data })

    } catch (err) {
        dispatch({ type: CANDIDATE_ERROR })
    }
}

export const postCandidate = candidate => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const data = JSON.stringify(candidate);
    try {
        console.log('///////////////////', 1)
        const res = await axios.post('/candidate', data, config)
        console.log('///////////////////', 2)
        dispatch({ type: POST_CANDIDATE, payload: res.data })
    } catch (err) {
        dispatch({ type: CANDIDATE_ERROR })
    }
}

export const getCandidate = id => async dispatch => {
    try {
        const res = await axios.get(`/api/candidate/${id}`)
        dispatch({ type: GET_CANDIDATE, payload: res.data })
    } catch (err) {
        dispatch({ type: CANDIDATE_ERROR })
    }
}

export const getShortlistedCandidate = () => async dispatch => {
    try {
        console.log("ssssss1")
        const res = await axios.get('/api/shortlisted')
        console.log("ssssss2", res.data)
        dispatch({ type: GET_SHORTLISTED, payload: res.data })
    } catch (err) {
        dispatch({ type: CANDIDATE_ERROR })
    }
}

export const getRejectedCandidate = () => async dispatch => {
    try {
        const res = await axios.get('/api/rejected')
        dispatch({ type: GET_SHORTLISTED, payload: res.data })
    } catch (err) {
        dispatch({ type: CANDIDATE_ERROR })
    }
}

export const shortlistCandidate = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json"
        }
    }

    try {
        const res = await axios.patch(`/api/shortlist/${id}`, config)
        dispatch({ type: POST_SHORTLIST, payload: res.data })
    } catch (err) {
        dispatch({ type: CANDIDATE_ERROR })
    }
}

export const rejectCandidate = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': "application/json"
        }
    }

    try {
        const res = await axios.patch(`/api/reject/${id}`, config)
        dispatch({ type: POST_REJECT, payload: res.data })
    } catch (err) {
        dispatch({ type: CANDIDATE_ERROR })
    }
}