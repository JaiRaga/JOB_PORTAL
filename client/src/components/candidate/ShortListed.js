import React, { useEffect } from 'react'
import { Grid, makeStyles } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { getShortlistedCandidate } from "../../redux/actions/candidate"
import CandidateItem from "./CandidateItem"

const useStyles = makeStyles(theme => ({
    margin: {
        marginTop: 5
    }
}))

const ShortListed = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getShortlistedCandidate())
    }, [])

    const shortlisted = useSelector(state => state.candidate.shortlisted)

    return (
        <Grid container direction="column" className={classes.margin}>
            {shortlisted.map(candidate => <CandidateItem candidate={candidate} />)}
        </Grid>
    )
}

export default ShortListed
