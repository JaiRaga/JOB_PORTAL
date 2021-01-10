import React from 'react'
import { Grid, Avatar, Typography, Button, makeStyles } from "@material-ui/core"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles(theme => ({
    candidate: {
        margin: 5
    },
    name: {
        margin: 10,
        paddingTop: 2
    },
    avatar: {
        margin: 10
    }
}))


const CandidateProfile = () => {
    const classes = useStyles()
    const history = useHistory()

    const shortlisted = () => {

        history.push("/home")
    }

    const rejected = () => {

        history.push("/home")
    }

    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item>
                <Grid container item>
                    <Grid item className={classes.avatar}><Avatar /></Grid>
                    <Grid item className={classes.name}><Typography variant="h6">Name</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button color="primary" onClick={shortlisted}>Shortlist</Button>
                <Button color="secondary" onClick={rejected}>Reject</Button>
            </Grid>
        </Grid>
    )
}

export default CandidateProfile
