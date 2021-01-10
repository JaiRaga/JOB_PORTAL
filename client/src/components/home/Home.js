import React from 'react'
import { Grid } from "@material-ui/core"
import Candidates from "../candidate/Candidates"

const Home = () => {
    return (
        <Grid container justify="center" alignItems="center">
            {/* <Grid item> */}
            <Candidates />
            {/* </Grid> */}
        </Grid>
    )
}

export default Home
