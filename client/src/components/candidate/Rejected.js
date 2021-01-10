import React, { useEffect } from 'react'
import { Grid, makeStyles } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { getRejectedCandidate } from "../../redux/actions/candidate"
import CandidateItem from "./CandidateItem"

const useStyles = makeStyles(theme => ({
    margin: {
        marginTop: 5
    }
}))

const Rejected = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRejectedCandidate())
    }, [])

    const rejected = useSelector(state => state.candidate.shortlisted)

    return (
        <Grid container direction="column" className={classes.margin}>
            {rejected.map(candidate => <CandidateItem candidate={candidate} />)}
        </Grid>
    )
}

export default Rejected