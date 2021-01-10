import React from 'react'
import { Grid, Paper, makeStyles, Typography, Avatar, Button } from "@material-ui/core"
import { useDispatch } from 'react-redux'
import { shortlistCandidate, rejectCandidate } from '../../redux/actions/candidate'
import { useHistory } from 'react-router-dom'

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
    const history = useHistory()

    const shortlist = () => {
        dispatch(shortlistCandidate(candidate._id))
        history.push("/home")
    }

    const reject = () => {
        dispatch(rejectCandidate(candidate._id))
        history.push("/home")
    }

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
                        <Button color="primary" onClick={shortlist}>Shortlist</Button>
                        <Button color="secondary" onClick={reject}>Reject</Button>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    )
}

export default CandidatesItem
