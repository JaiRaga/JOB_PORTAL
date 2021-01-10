import React, { useEffect } from 'react'
import { Grid, makeStyles } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import CandidateItem from "./CandidateItem"
import { getAllCandidates } from '../../redux/actions/candidate'

const useStyles = makeStyles(theme => ({
    candidate: {
        margin: 5
    }
}))

const Candidates = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCandidates())
    }, [])

    const candidates = useSelector(state => state.candidate.candidates)

    return (
        <Grid container item justify="center" alignItems="center">
            <Grid item className={classes.candidate}>
                {candidates.map(candidate => (
                    <CandidateItem candidate={candidate} />
                ))}
            </Grid>

            {/* <Grid item className={classes.candidate}>
                <CandidateItem />
            </Grid>
            <Grid item className={classes.candidate}>
                <CandidateItem />
            </Grid><Grid item className={classes.candidate}>
                <CandidateItem />
            </Grid>
            <Grid item className={classes.candidate}>
                <CandidateItem />
            </Grid> */}

            {/* <CandidateItem />
            <CandidateItem />
            <CandidateItem />
            <CandidateItem />
            <CandidateItem /> */}
        </Grid>
    )
}

export default Candidates
