import React from 'react'
import { Grid, Paper, makeStyles, Typography, Avatar, Button } from "@material-ui/core"
import { useDispatch } from 'react-redux'
import { shortlistCandidate, rejectCandidate } from '../../redux/actions/candidate'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: 15
    },
    candidate: {
        padding: 15,
        width: "360px"
    },
    name: {
        marginTop: 5,
        paddingLeft: 10
    },
    btn: {
        marginTop: 10
    }
}))

const CandidatesItem = ({ candidate }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (

        <Grid container item className={classes.root} justify="center" alignItems="center">
            <Grid item>
                <Paper elevation={10} className={classes.candidate}>
                    <Grid item>
                        <Grid container item>
                            <Grid item>
                                <Avatar alt={candidate.name} src={candidate.image} />
                            </Grid>
                            <Grid item className={classes.name}>
                                <Typography variant="h6">{candidate.name}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.btn}>
                        <Button color="primary" onClick={() => dispatch(shortlistCandidate(candidate._id))}>Shortlist</Button>
                        <Button color="secondary" onClick={() => dispatch(rejectCandidate(candidate._id))}>Reject</Button>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    )
}

export default CandidatesItem
